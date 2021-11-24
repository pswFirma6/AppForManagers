export class SurveyStats{
    category: string
    surveyQuestions: SurveyQuestion[]
}

export class SurveyQuestion{
    questionText: string
    rate: number
}

export class SurveyQuestionRate{
    questionText: string
    rate: number
}