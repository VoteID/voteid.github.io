import * as Express from 'express';
import { Request, Response } from 'express';
import { serve } from '../utils/Utils';
import { getIntInRange } from '@vuesion/utils/dist/randomGenerator';
import rateLimit from 'express-rate-limit';
import forever from 'forever-monitor';

const getErrorWithProbability = (probability: number) => getIntInRange(0, 100) <= probability;

export const DemoRoutes = (app: Express.Application) => {
  /**
   * http -> https redirect for heroku
   */
  app.get('*', (req: Request, res: Response, next: any) => {
    const host: string = req.headers.host || 'localhost:3000';
    const redirect: string = `https://${host}` + req.url;

    if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(redirect);
    } else {
      next();
    }
  });
  app.use('/storybook', serve('../../storybook-static'));
  app.use('/docs', (req: Request, res: Response) => {
    res.status(301).redirect('https://vuesion.github.io/docs/en/');
  });

  /**
   * Auth-Demo
   */
  app.post('/token', (req: Request, res: Response) => {
    if (getErrorWithProbability(10)) {
      res.status(500).json({});
    } else if (req.body.grant_type === 'password') {
      res.status(200).json({ access_token: 'accessToken', refresh_token: 'refreshToken' });
    } else if (req.body.grant_type === 'refresh_token' && req.body.refresh_token === 'refreshToken') {
      res.status(200).json({ access_token: 'accessToken2', refresh_token: 'refreshToken2' });
    } else if (req.body.grant_type === 'refresh_token' && req.body.refresh_token === 'refreshToken2') {
      res.status(200).json({ access_token: 'accessToken', refresh_token: 'refreshToken' });
    }
  });

  const apiLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100,
  });

  app.post('/lobby', apiLimiter, (req: Request, res: Response) => {
    const maxTries = 3;

    const lobbyService = new forever.Monitor('src/server/lobbyService.js', {
      max: maxTries,
      silent: true,
      args: [],
      minUptime: 300,
    });

    let multiAddr: string;

    lobbyService.on('stdout', function(out) {
      console.info('received stdout');
      console.info(out.toString());
      const info = out.toString();
      if (info.indexOf('multiAddr:') != -1) {
        console.info('appears to be multiAddr');
        multiAddr = info.substring(info.indexOf('multiAddr:') + 10, 46 + 10);
        res.status(200).json({ multiAddr });
      }
    });

    lobbyService.on('restart', function() {
      console.error('Forever restarting script for ' + lobbyService + ' time');
    });

    lobbyService.on('exit:code', function(code) {
      console.error('Forever detected script exited with code ' + code);
      if (multiAddr) {
        lobbyService.stop();
        // res.status(200).json({ multiAddr: multiAddr });
      }
      if (!multiAddr && lobbyService.times == maxTries) {
        res.status(500).json({});
      }
    });

    lobbyService.start();

    /*
    const lobbyServiceTimeout = setTimeout(() => {
      lobbyService.kill();
    }, 300);
    
    console.info(lobbyServiceTimeout);
    */
  });
  /*
  app.delete('/lobby', (req: Request, res: Response) => {
    if (getErrorWithProbability(10)) {
      res.status(500).json({});
    } else {
      res.status(200).json({});
    }
  });
*/
  app.delete('/token', (req: Request, res: Response) => {
    if (getErrorWithProbability(10)) {
      res.status(500).json({});
    } else {
      res.status(200).json({});
    }
  });

  app.get('/protected', (req: Request, res: Response) => {
    if (getErrorWithProbability(40)) {
      res.status(401).json({});
    } else {
      res.status(200).json({});
    }
  });
};
