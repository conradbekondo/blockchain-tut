import { RunnerExecutorSchema } from './schema';
import executor from './executor';

const options: RunnerExecutorSchema = {};

describe('Runner Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
