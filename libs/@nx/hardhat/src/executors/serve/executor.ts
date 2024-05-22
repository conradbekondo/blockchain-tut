import { spawn } from 'child_process';
import { RunnerExecutorSchema } from './schema';
import { ExecutorContext } from '@nx/devkit';


export default async function runExecutor(options: RunnerExecutorSchema, { cwd }: ExecutorContext) {
  const hostname = options.hostname ?? '127.0.0.1';
  const port = options.port ?? 5555;

  console.info(`Running Hardhat server on ${hostname}:${port}`);

  try {
    const { stdout, stderr } = spawn(`npx hardhat node --hostname ${hostname} --port ${port}`, { cwd });

    stdout.on('data', (data: Buffer) => {
      console.count('data');
      console.log(data.toString('utf-8'));
    });

    stderr.on('data', (data: Buffer) => {
      console.count('error');
      console.error(data.toString('utf-8'));
    });
  } catch (error) {
    console.log('error occured');
    return { success: !!error };
  }

  return {
    success: true,
  };
}
