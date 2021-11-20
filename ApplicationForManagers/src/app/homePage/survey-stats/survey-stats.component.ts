import { Component, OnInit } from '@angular/core';
import { SurveyQuestion, SurveyStats } from 'src/app/shared/survey-stats.model';

@Component({
  selector: 'app-survey-stats',
  templateUrl: './survey-stats.component.html',
  styleUrls: ['./survey-stats.component.css']
})
export class SurveyStatsComponent implements OnInit {
  surveyStats: SurveyStats[] = []

  constructor() { }

  ngOnInit(): void {
    const question1: SurveyQuestion = {
      question: 'First question',
      rate: 3
    }
    const question2: SurveyQuestion = {
      question: 'Second question',
      rate: 5
    }
    const question3: SurveyQuestion = {
      question: 'Third question',
      rate: 4
    }
    const surveyStats1: SurveyStats = {
      category: 'Hospital',
      surveyQuestions: [question1, question2, question3]
    }
    
    const surveyStats2: SurveyStats = {
      category: 'Staff',
      surveyQuestions: [question1, question2, question3]
    }

    this.surveyStats.push(surveyStats1)
    this.surveyStats.push(surveyStats2)
    console.log(this.surveyStats)
  
  }

  public getAverage(category: string){
    let average: number = 0
    console.log(this.surveyStats)
    
    for(let surveyStat of this.surveyStats){
      if(surveyStat.category == category){
        let counter: number = 0
        for(let question of surveyStat.surveyQuestions){
          counter = counter + 1
          average = (average + question.rate) / counter
        }
        return average
      }
    }
    return average
  }
}
