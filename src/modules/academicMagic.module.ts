import { AcademicMagicController } from 'src/controllers/academicMagic.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicMagicEntity } from '../entity/academicMagic.entity';
import { AcademicMagicService } from '../services/sign/academicMagic.service';
@Module({
  imports: [TypeOrmModule.forFeature([AcademicMagicEntity])],
  controllers: [AcademicMagicController],
  providers: [AcademicMagicService],
})
export class AcademicMagicModule {}
