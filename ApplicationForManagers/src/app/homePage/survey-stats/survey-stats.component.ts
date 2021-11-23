import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/service/survey-stats.service';
import { SurveyQuestion, SurveyStats } from 'src/app/shared/survey-stats.model';

@Component({
  selector: 'app-survey-stats',
  templateUrl: './survey-stats.component.html',
  styleUrls: ['./survey-stats.component.css']
})
export class SurveyStatsComponent implements OnInit {
  public surveyStats: SurveyStats[] = []

  public surveyQuestions: SurveyQuestion[] = []

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getMethod().subscribe(res =>{
      this.surveyQuestions = res;
      console.log(this.surveyQuestions)
    })
  
    const surveyStats: SurveyStats = {
      category: 'Hospital',
      surveyQuestions: this.surveyQuestions
    }

    this.surveyStats.push(surveyStats)
    console.log(this.surveyStats)
  }

}
