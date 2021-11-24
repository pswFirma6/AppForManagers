import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/service/survey-stats.service';
import { SurveyQuestion, SurveyStats, SurveyQuestionRate } from 'src/app/shared/survey-stats.model';

@Component({
  selector: 'app-survey-stats',
  templateUrl: './survey-stats.component.html',
  styleUrls: ['./survey-stats.component.css']
})
export class SurveyStatsComponent implements OnInit {
  public surveyQuestionsRate: SurveyQuestionRate[] = []

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getMethod().subscribe(res =>{
      console.log(res)
      this.surveyQuestionsRate = res;
      console.log(this.surveyQuestionsRate)
    })
  
   
  }

}
