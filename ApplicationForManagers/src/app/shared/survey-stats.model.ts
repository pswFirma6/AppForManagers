export class SurveyStats{
    category: string
    surveyQuestions: SurveyQuestion[]
}

export class SurveyQuestion{
    questionText: string
    rate: number
}