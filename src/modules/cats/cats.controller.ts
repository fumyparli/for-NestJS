import {Controller, Get, Post, Req, Res} from '@nestjs/common';
import {Request, Response} from "express";

@Controller('cats')
export class CatsController {
    @Post()
    create(@Req() req: Request): string {
        return "this action adds a new cat";
    }

    @Get()
    findOne(@Req() req: Request, @Res() res: Response): string {
        res.send("<h1>hello cat2</h1>");
        return "all can come";
    }
}