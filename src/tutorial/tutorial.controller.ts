import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateTutorialDto, TechnologyDto } from "./tutorial.dto";
import { NotesNav, TutorialService } from "./tutorial.service";

@Controller("tutorial")
export class TutorialController {
  constructor(private reportService: TutorialService) {}

  @Post()
  async createReport(@Body() createTutorialDto: CreateTutorialDto) {
    return this.reportService.createTutorial(createTutorialDto);
  }

  @Get("/:technology")
  async findTutorials(
    @Param("technology") technology: TechnologyDto["technology"]
  ): Promise<NotesNav[]> {
    return await this.reportService.findTutorials(technology);
  }

  @Get("/:technology/:chapter/:title")
  async findOneTutorial(
    @Param("technology") technology: TechnologyDto["technology"],
    @Param("chapter") chapter: string,
    @Param("title") title: string
  ) {
    return await this.reportService.findOneTutorial({
      technology,
      chapter,
      title,
    });
  }
}
