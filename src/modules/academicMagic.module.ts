import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicMagicController } from '../controllers/academicMagic.controller';
import { AcademicMagicEntity } from '../entity/academicMagic.entity';
import { AcademicMagicService } from '../services/sign/academicMagic.service';
@Module({
  imports: [TypeOrmModule.forFeature([AcademicMagicEntity])],
  controllers: [AcademicMagicController],
  providers: [AcademicMagicService],
})
export class ArticleModule {}
