import { plainToClass } from 'class-transformer';
import { IsAlphanumeric, IsEnum, IsNumber, validateSync, IsString } from 'class-validator';

enum EnvironmentType {
  Local = 'local',
  Dev = 'dev',
  Prod = 'prod',
}

class EnviromentVariables {
  @IsEnum(EnvironmentType)
  NODE_ENV: EnvironmentType;

  @IsNumber()
  PORT: number;

  @IsNumber()
  POSTGRES_PORT: number;

  @IsString()
  POSTGRES_USER: string;

  @IsAlphanumeric()
  POSTGRES_PASSWORD: string;

  @IsString()
  POSTGRES_DB: string;

  @IsAlphanumeric()
  POSTGRES_HOST: string;

  @IsString()
  DATABASE_URL: string;

  @IsString()
  MYSECRET_KEY;
}

export function validate(configuration: Record<string, unknown>) {
  const finalConfig = plainToClass(EnviromentVariables, configuration, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(finalConfig, { skipMissingProperties: true });

  if (errors.length > 0) throw new Error(errors.toString());

  return finalConfig;
}
