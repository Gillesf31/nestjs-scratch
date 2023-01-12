import {Controller, Get} from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get()
    getRootRoute() {
        return 'Hello World!';
    }

    @Get('/test')
    getTestRoute() {
        return 'Test route';
    }
}
