const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Behaviors.Tween,
		C3.Plugins.Ahmedsm_global_Variables,
		C3.Behaviors.Rotate,
		C3.Plugins.Touch,
		C3.Plugins.Particles,
		C3.Plugins.AdvancedRandom,
		C3.Plugins.Arr,
		C3.Plugins.AJAX,
		C3.Plugins.CSV,
		C3.Plugins.Keyboard,
		C3.Plugins.LocalStorage,
		C3.Plugins.Date,
		C3.Plugins.Browser,
		C3.Plugins.TextBox,
		C3.Plugins.NinePatch,
		C3.Behaviors.Sin,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.TextBox.Acts.SetCSSStyle,
		C3.Plugins.TextBox.Acts.SetMaxLength,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.CSV.Acts.ParseCSV,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Exps.Opacity,
		C3.Plugins.AJAX.Acts.Request,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Ahmedsm_global_Variables.Acts.SetInstanceVar,
		C3.Plugins.AdvancedRandom.Acts.CreatePermutationTable,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.TextBox.Cnds.CompareInstanceVar,
		C3.Plugins.Arr.Cnds.ArrForEach,
		C3.Plugins.Arr.Cnds.CompareCurrent,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.Arr.Cnds.CompareXY,
		C3.Plugins.Arr.Exps.CurY,
		C3.Plugins.System.Exps.uppercase,
		C3.Plugins.System.Acts.ScrollX,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.NinePatch.Acts.SetWidth,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.Browser.Acts.CancelFullScreen
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Tween: 0},
	{names_Text: 0},
	{counter: 0},
	{student_number: 0},
	{class: 0},
	{gid: 0},
	{leader_gid: 0},
	{names: 0},
	{Rotate: 0},
	{spirals: 0},
	{Touch: 0},
	{Particles: 0},
	{credits: 0},
	{AdvancedRandom: 0},
	{students_data: 0},
	{AJAX: 0},
	{CSV: 0},
	{Keyboard: 0},
	{LocalStorage: 0},
	{spin: 0},
	{choose_class: 0},
	{lb_gid: 0},
	{class_text: 0},
	{time_bar: 0},
	{bar: 0},
	{Date: 0},
	{lesson: 0},
	{remaining_text: 0},
	{group: 0},
	{item: 0},
	{adding_state: 0},
	{activation: 0},
	{arrow: 0},
	{icons: 0},
	{item_text: 0},
	{url_get: 0},
	{url_send: 0},
	{v_dbUrl: 0},
	{loading_text: 0},
	{Browser: 0},
	{textbox: 0},
	{id: 0},
	{TextInput: 0},
	{sign_in: 0},
	{sign_in_status: 0},
	{progress_bar_patch9: 0},
	{next: 0},
	{next_text: 0},
	{circle: 0},
	{progressBarFrame: 0},
	{Sine: 0},
	{ship: 0},
	{glow: 0},
	{level_text_item: 0},
	{item_remainent_text: 0},
	{leaderboard_text: 0},
	{lb_db: 0},
	{fullscreen: 0},
	{current_lesson_text: 0},
	{ui_text: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	names_Text: class extends self.ITextInstance {},
	names: class extends self.IInstance {},
	spirals: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Particles: class extends self.IParticlesInstance {},
	credits: class extends self.ITextInstance {},
	AdvancedRandom: class extends self.IInstance {},
	students_data: class extends self.IArrayInstance {},
	AJAX: class extends self.IInstance {},
	CSV: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	spin: class extends self.ISpriteInstance {},
	class: class extends self.ISpriteInstance {},
	class_text: class extends self.ITextInstance {},
	time_bar: class extends self.ISpriteInstance {},
	bar: class extends self.ISpriteInstance {},
	Date: class extends self.IInstance {},
	lesson: class extends self.IArrayInstance {},
	remaining_text: class extends self.ITextInstance {},
	group: class extends self.ISpriteInstance {},
	arrow: class extends self.ISpriteInstance {},
	icons: class extends self.ISpriteInstance {},
	item_text: class extends self.ITextInstance {},
	v_dbUrl: class extends self.IInstance {},
	loading_text: class extends self.ITextInstance {},
	Browser: class extends self.IInstance {},
	textbox: class extends self.ISpriteInstance {},
	TextInput: class extends self.ITextInputInstance {},
	sign_in: class extends self.ISpriteInstance {},
	sign_in_status: class extends self.ITextInstance {},
	progress_bar_patch9: class extends self.IWorldInstance {},
	next: class extends self.ISpriteInstance {},
	next_text: class extends self.ITextInstance {},
	circle: class extends self.ISpriteInstance {},
	progressBarFrame: class extends self.ISpriteInstance {},
	ship: class extends self.ISpriteInstance {},
	glow: class extends self.ISpriteInstance {},
	level_text_item: class extends self.ITextInstance {},
	item_remainent_text: class extends self.ITextInstance {},
	leaderboard_text: class extends self.ITextInstance {},
	lb_db: class extends self.IArrayInstance {},
	fullscreen: class extends self.ISpriteInstance {},
	current_lesson_text: class extends self.ITextInstance {},
	ui_text: class extends self.ITextInstance {}
}