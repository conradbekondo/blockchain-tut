import { ExecutorContext } from '@nx/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';
import { BuildExecutorSchema } from './schema';

export default async function runExecutor(_: BuildExecutorSchema, { cwd }: ExecutorContext) {
  console.log('Compiling smart contracts...');

  const { stdout, stderr } = await promisify(exec)(`npx hardhat compile`, { cwd });

  console.log(stdout);
  console.error(stderr);

  return {
    success: !stderr,
  };
}
