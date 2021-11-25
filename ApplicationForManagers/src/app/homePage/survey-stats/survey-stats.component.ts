import { Component, OnInit } from '@angular/core';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { SurveyService } from 'src/app/service/survey-stats.service';
import { SurveyQuestion, SurveyStats, SurveyQuestionRate, SurveryCategoryDTO } from 'src/app/shared/survey-stats.model';

@Component({
  selector: 'app-survey-stats',
  templateUrl: './survey-stats.component.html',
  styleUrls: ['./survey-stats.component.css']
})
export class SurveyStatsComponent implements OnInit {
  public surveyQuestionsRate: SurveyQuestionRate[] = []
  public surveryCategoryDTO: SurveryCategoryDTO[] = []

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getMethod().subscribe(res =>{
      console.log(res)
      this.surveyQuestionsRate = res;
      console.log(this.surveyQuestionsRate)
    });

    this.surveyService.getCategory().subscribe(res =>{
      console.log(res)
      this.surveryCategoryDTO = res;
      this.surveryCategoryDTO.map(sur => {
        sur.categoryName=this.surveyService.getCategoryNameByEnum(sur.category);
      })
      console.log(this.surveryCategoryDTO)
    });
  
   
  }

}
