interface IArticle {
	id: number;
	title: string;
	body: string;
}

//Store State Types
type ArticleState = {
	name: string;
	articles: IArticle[];
};

type LandingState = {
	greeting: string;
};

type AppState = {
	pageHeader: string;
};

type TestState = {
	count: number;
};

//Store Action Types
type ArticleAction = {
	type: string;
	article: IArticle;
};

type LandingAction = {
	type: string;
	payload: any;
};

type AppAction = {
	type: string;
	payload: any;
};

type TestAction = {
	type: string;
};


type ArticleDispatchType = (args: ArticleAction) => ArticleAction;
type LandingDispatchType = (args: LandingAction) => LandingAction;
type AppDispatchType = (args: AppAction) => AppAction;
