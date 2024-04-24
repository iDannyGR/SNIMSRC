import { createCipheriv, randomBytes, randomUUID } from 'crypto'
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'



@Injectable()
export class Encript {
  constructor(private configService: ConfigService) {}

  async encrptPsw(data:string) {
        const algoritm:string = 'aes-256-cbc';
        const key = randomBytes(32);
        const iv =  randomBytes(32);

        const password = this.configService.get('encriptpsw');

        const cipher = createCipheriv(algoritm, key, iv );
        const paswEncript = Buffer.concat([cipher.update(data), cipher.final()]);
        
        return paswEncript.toString('hex');
  } 

}

