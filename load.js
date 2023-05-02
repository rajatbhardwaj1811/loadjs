(() => {
    var Ps = Object.create;
    var Vt = Object.defineProperty;
    var _s = Object.getOwnPropertyDescriptor;
    var Bs = Object.getOwnPropertyNames;
    var Gs = Object.getPrototypeOf,
        As = Object.prototype.hasOwnProperty;
    var it = (D, e) => () => (D && (e = D(D = 0)), e);
    var Bt = (D, e) => () => (e || D((e = {
            exports: {}
        }).exports, e), e.exports),
        ft = (D, e) => {
            for (var i in e) Vt(D, i, {
                get: e[i],
                enumerable: !0
            })
        },
        Ms = (D, e, i, o) => {
            if (e && typeof e == "object" || typeof e == "function")
                for (let p of Bs(e)) !As.call(D, p) && p !== i && Vt(D, p, {
                    get: () => e[p],
                    enumerable: !(o = _s(e, p)) || o.enumerable
                });
            return D
        };
    var Gt = (D, e, i) => (i = D != null ? Ps(Gs(D)) : {}, Ms(e || !D || !D.__esModule ? Vt(i, "default", {
        value: D,
        enumerable: !0
    }) : i, D));
    var st, P = it(() => {
        st = {
            marketgid: `<div class="mgheader">
	<span class="mghead">%WIDGET_TITLE%</span>
	<div class="mg_addad%id">
		<a href="#" style="display: flex !important; align-items: center; justify-content: center; position: static;">
			<object aria-label="logo" width="58" height="26">
				<a style="position: static !important; margin-right: 3px !important; width: 55px; height: 26px"
				   href="https://widgets.mgid.com/%lang/%utm%id" target="_blank">
					<img style="display: inline-block; width: 55px !important; height: 26px !important;
					margin: 0 !important; position: static;" src="https://cdn.mgid.com/images/mgid/mgid_ua.svg"
					    width="55" height="26" alt />
				</a>
			</object>
			<object aria-label="logo" width="20" height="26">
				<a style="position: static !important; margin: 0 !important; width: 20px; height: 26px"
				   href="https://www.mgid.com/services/privacy-policy" target="_blank">
					<img style="display: inline-block; width: 20px !important; height: 20px !important;
					margin: 0 !important; position: static;" src="https://cdn.mgid.com/images/logos/Adchoices.svg"
					    width="20" height="20" alt />
				</a>
			</object>
		</a>
	</div>
</div>
<style>
	.mghead {
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        text-align: left;
        font-family: Verdana, sans-serif;
        color: #4555a7;
        display: block;
        margin: 5px 0 0px 5px;
        float: left;
    }

    .mgheader {
        display: table !Important;
        width: 100% !important;
        margin-bottom: 0px;
    }

    div.mg_addad%id {
        text-align: right;
        opacity: 0.5;
        margin-right: 10px;
        display: inline-block;
        float: right;
    }

    div.mg_addad%id:hover {
        opacity: 1
    }

    div.mg_addad%id a {
        color: #000000;
        font: normal 10px Myriad Pro;
        text-decoration: none;
    }

    div.mg_addad%id img {
        margin: 0px -5px 0px 0px;
        border: 0px;
        float: none;
        padding: 0px;
    }
	div.mg_addad%id object a {
		height: 26px;
		display: flex;
		align-items: center;position: static !important; margin: 0 !important;
	}
</style>
`
        }
    });
    var at, _ = it(() => {
        at = {
            "in-article": {
                "in-article-impact": "mgid-in-article-impact"
            }
        }
    });
    var ot, B = it(() => {
        ot = ["make click", "cl[i!]ck (h[e3]re|me|please)"]
    });
    var nt, G = it(() => {
        nt = {
            "[GO]": "GO",
            "[INFORMER_BACK_BUTTON_BANNER_TEXT]": "More stories to check out before you go",
            "[INFORMER_BUTTON_MORE]": "More",
            "[INFORMER_CLOSE_AD_BUTTON]": "Close Ad",
            "[INFORMER_CTA_LEARN_MORE]": "Read more",
            "[INFORMER_OPEN_BUTTON]": "Open",
            "[LS_INFORMERS_CLOSE_BUTTON]": "Close",
            "[LS_INFORMERS_MOBILEMODAL_GO]": "Go",
            "[LS_INFORMERS_WIDGET_MOBILE_CONTINUE]": "Continue",
            "[WIDGET_TITLE_CHECK_THIS_OUT]": "Check This Out",
            "[WIDGET_TITLE_INTERESTING]": "Interesting in network",
            "[WIDGET_TITLE_INTERESTING_FOR_YOU]": "Interesting For You",
            "[WIDGET_TITLE_MORE_COOL_STUFF]": "More Cool Stuff",
            "[WIDGET_TITLE_MORE_FROM_AROUND_THE_WEB]": "More From Around The Web",
            "[WIDGET_TITLE_PARTNERS_NEWS]": "Partner News",
            "[WIDGET_TITLE_POPULAR]": "Popular in network",
            "[WIDGET_TITLE_PROMOTED_CONTENT]": "Promoted Content",
            "[WIDGET_TITLE_SMI]": "In other media",
            "[WIDGET_TITLE_SPONSORED_CONTENT]": "Sponsored Content",
            "[WIDGET_TITLE_SUGGESTED_NEWS]": "Suggested News",
            "[WIDGET_TITLE_YOU_MAY_LIKE]": "You may like"
        }
    });
    var A = it(() => {});
    var rt, L = it(() => {
        rt = ["es", "vi", "it", "hi", "pl", "ru", "uk"]
    });
    var H = it(() => {});
    var $, dt = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        $ = class {
            constructor(e) {
                this.UNLIMITED_TIMEOUT = 999999, this.app = e
            }
            addHook(e, i, o = 0) {
                {
                    let p = o !== 0;
                    this.app[e].push(c => {
                        let w = this.name || this.constructor.name,
                            k = [];
                        return k.push(this.app.lifeCycleBlock.execute(`${e} hook ${w}`, h => {
                            try {
                                p ? (c = c || [], c.push(h), i.apply(this, c)) : (i.apply(this, c), h())
                            } catch (y) {
                                this.app.log(`${e} hook ${w}:`, "error", y), h()
                            }
                        }, 0, !1, !0)), p && o !== this.UNLIMITED_TIMEOUT && k.push(this.app.lifeCycleBlock.execute("", h => {
                            h()
                        }, o, !1, !0)), Promise.race(k)
                    })
                }
            }
        }
    });
    var At, Ne = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        At = class extends $ {
            constructor(e) {
                super(e), this.isDebugEnabled = !1, this.isProfilerEnabled = !1, this.app.log = this.log.bind(this), this.app.time = this.time.bind(this), this.app.timeEnd = this.timeEnd.bind(this)
            }
            initDebugger() {
                this.isDebugEnabled = this.app.getQueryParameterByName("mgwdebug") === "1" || !1, this.isProfilerEnabled = this.app.getQueryParameterByName("mgwprofile") === "1" || !1
            }
            log(e, i = "log", o = null) {
                if (this.isDebugEnabled) {
                    let c = ["log", "info", "warn", "error"].indexOf(i) !== -1 ? i : "log";
                    typeof console[c] != "function" && (c = "log"), o && o.stack && o.message ? console[c](`WIDGET_${1435486}_${this.app.uniqId}`, e, o.stack) : console[c](`WIDGET_${1435486}_${this.app.uniqId}`, e)
                }
            }
            time(e) {
                this.isProfilerEnabled && typeof console.time == "function" && console.time(`WIDGET_${1435486}_${this.app.uniqId} ${e}`)
            }
            timeEnd(e) {
                this.isProfilerEnabled && typeof console.timeEnd == "function" && console.timeEnd(`WIDGET_${1435486}_${this.app.uniqId} ${e}`)
            }
        }
    });
    var Mt, Wt, He = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        Ne();
        (function(D) {
            D.beforeInjectScriptEvent = "beforeinjectscriptevent"
        })(Mt || (Mt = {}));
        Wt = class {
            constructor(e, i, o, p, c, w) {
                if (this.BaseBlockClass = Wt, this.app = this, this.context = i, this.root = this.context.document.getElementById(e), this.debugBlock = new At(this), this.containerId = p, this.uniqId = c, this.fallbackMode = o, this.page = 1, this.iteration = 1, this.adlink = "", this.template = "", this.templateContent = "", this.id = 1435486, this.originalId = 1435486, this.pvid = 0, this.muid = "", this.afterPreRenderNewsHooks = [], this.beforeInjectScriptHooks = [], this.beforeInjectTemplateHooks = [], this.beforeLoadNewsHooks = [], this.afterLoadNewsHooks = [], this.afterInjectScriptHooks = [], this.beforePrepareCappingDataHooks = [], this.afterPrepareCappingDataHooks = [], this.afterSendCappingHooks = [], this.beforeInitHooks = [], this.afterInitHooks = [], typeof this.context?.CustomEvent == "function" ? this.beforeInjectScriptEvent = new CustomEvent(Mt.beforeInjectScriptEvent) : (this.beforeInjectScriptEvent = this.context.document.createEvent("CustomEvent"), this.beforeInjectScriptEvent.initCustomEvent(Mt.beforeInjectScriptEvent)), this.blocksAddress = "", this.tickerPrefix = "", this.countLoadBlocks = 0, this.preTemplate = "", this.postTemplate = "", this.banners = {}, this.loadedDefault = !1, this.teaserHashes = {}, this.teaserData = {}, this.json = [], this.servicerData = {}, this.pagesServicerData = [], this.childWidgetsData = JSON.parse("[]"), this.versionWidget = w, this.sspPerformance = 10 >= Math.ceil(Math.random() * 100), this.doubleClickType = "", this.doubleClickCheckId = 0, this.doubleClickPercent = 0, this.widgetConstructorData = JSON.parse('{"blur":"auto","cols":1,"font":"arial","kind":"wages","rows":15,"type":"smart","media":{"opacity":80,"duration":1,"minWidth":250,"position":"bottom","minHeight":150,"videoOverlay":1},"mgbox":{"styles":{"maxWidth":1220}},"price":false,"theme":"#2b397b","width":0,"button":1,"mcdesc":{"styles":{"font":"verdana","color":"#666666","display":"none","fontSize":11,"fontStyle":"normal","textAlign":"center","fontWeight":"normal","textDecoration":"none"}},"mgline":{"styles":{"width":"150","height":"120","margin":"2","borderColor":"#ffffff","borderStyle":"solid","borderWidth":0,"borderRadius":"0"}},"imgType":"super","mcimage":{"size":200,"styles":{"padding":0,"borderColor":"#ffffff","borderStyle":"solid","borderWidth":0},"size-width":492,"size-height":277},"mcprice":{"show":"false","styles":{"font":"verdana","color":"#2a3a7b","fontSize":14,"fontStyle":"normal","textAlign":"left","fontWeight":"bold","textDecoration":"none"}},"mctable":{"styles":{"borderColor":"","borderWidth":0,"backgroundColor":""}},"mctitle":{"styles":{"color":"#515150","fontSize":"17","fontStyle":"normal","textAlign":"center","fontWeight":"bold","text-transform":"uppercase","textDecoration":"none"}},"subType":"smart-plus","mcdomain":{"styles":{"font":"arial","color":"#bbbbbb","display":"block","fontSize":10,"fontStyle":"normal","textAlign":"center","fontWeight":"normal","textDecoration":"none"}},"rerunAds":"0","isToaster":"","colsMobile":2,"isDragDown":"","previewImg":"https:\\/\\/cdn.mgid.com\\/images\\/draw-widget-preview.jpg","colorButton":"","imageFormat":46,"imageShadow":"","scrollEffect":"0","textPosition":"bottom","autoplacement":"off","formatChanged":true,"customGradient":"","isInterstitial":"","popupFrequency":15,"widgetFormatId":7,"is_int_exchange":"0","mobileWidgetImg":"https:\\/\\/cdn.mgid.com\\/images\\/mobile-widget-preview.png","passageFrequency":60,"showEffectButton":"false","showWidgetButton":"true","teaserCardShadow":"0","teaserFixedWidth":"0","imageScaleOnHover":"","interstitialAfter":3,"is_show_ad_marker":0,"frequencyOfDisplay":"1","widgetTitleSettings":{"styles":{"font":"arial","color":"#2b397b","fontSize":14,"text-transform":"uppercase"}},"frequencyCappingShow":3,"frequencyCappingTime":2,"notificationPosition":"top","toasterInactivityTime":8,"widgetTypeDescription":1}'), this.blankImage = `data:image/svg+xml,%3Csvg
            xmlns="http://www.w3.org/2000/svg"
            width="492" height="277"
            viewBox="0 0 492 277"
            %3E%3C/svg%3E`, typeof this.widgetConstructorData.mctitle < "u" && typeof this.widgetConstructorData.mctitle.styles < "u" && typeof this.widgetConstructorData.mctitle.styles.fontSize < "u" ? this.autoSizeTitle = this.widgetConstructorData.mctitle.styles.fontSize : this.autoSizeTitle = 0, this.globalSettings = JSON.parse('{"capping_observer_threshold":"0.5","current_language":"en","widget_lazy_load_margin":"1000","accidental_clicks_delay":"10","ia_page_view_timeout":"180","ia_page_imp_timeout":"180","widget_intentiq_refresh_millis":"43200000","retention_tool_widget_utm":"utm_mgid_push"}'), this.preRenderImageSizes = {}, this.preRenderTeaserSizes = {}, this.customBanners = JSON.parse('{"1435486":[]}'), this.initServicerRequest = !0, this.clickHandlers = [], this.observerWidgetHooks = [], this.observerTeasersHooks = [], this.sspDoubleClickHash = [], this.requestParams = {}, this.webProtocol = "https:", this.clickHandlerList = {
                        onSiteNotificationClick: {
                            handler: "onSiteNotificationHandler",
                            priority: 8
                        },
                        onSmartDoubleClick: {
                            handler: "onSmartDoubleClickHandler",
                            priority: 10
                        },
                        onAntifraudStatisticsClick: {
                            handler: "onAntifraudStatisticsClickHandler",
                            priority: 15
                        },
                        sspDoubleClick: {
                            handler: "sspDoubleClickHandler",
                            priority: 20
                        },
                        activateDelayLink: {
                            handler: "activateDelayLinkHandler",
                            priority: 30
                        },
                        accidentalClicks: {
                            handler: "accidentalClicksHandler",
                            priority: 50
                        },
                        externalCountersLink: {
                            handler: "externalCountersLinkHandler",
                            priority: 100
                        },
                        returnedRefreshClick: {
                            handler: "returnedRefreshClickHandler",
                            priority: 120
                        },
                        internalExchangeLogger: {
                            handler: "internalExchangeLoggerHandler",
                            priority: 150
                        },
                        showDesktopDoubleClick: {
                            handler: "showDesktopDoubleClickButton",
                            priority: 150
                        },
                        showMobileDoubleClick: {
                            handler: "showDoubleClickButton",
                            priority: 150
                        },
                        hangNiceLinkListener: {
                            handler: "hangNiceLinkListener",
                            priority: 200
                        },
                        clickHeatMapElement: {
                            handler: "clickHeatMapElement",
                            priority: 400
                        },
                        closeWidgetClick: {
                            handler: "closeWidget",
                            priority: 600
                        },
                        refreshNews: {
                            handler: "refreshNewsHandler",
                            priority: 700
                        }
                    }, this.context.self !== this.context.top) {
                    let k = this.context.document.referrer.split("/");
                    this.intExchangeProtocol = k[0].indexOf("http") == 0 ? k[0] : "https:"
                } else {
                    let k = this.context.document.location.protocol;
                    this.intExchangeProtocol = k.indexOf("http") == 0 ? k : "https:"
                }
                this.sourceName = "", this.setTemplate(`<div class="mgbox">
	<!--advertPrefix-->
	{foreach}
	{if this.iteration == 1}<div class="row1">{/if}{if this.iteration == 2}</div><div class="row2">{/if}{if this.iteration == 4}</div><div class="row1">{/if}{if this.iteration == 5}</div><div class="row1">{/if}{if this.iteration == 6}</div><div class="row2">{/if}{if this.iteration == 8}</div><div class="row1">{/if}{if this.iteration == 9}</div><div class="row1">{/if}{if this.iteration == 10}</div><div class="row2">{/if}{if this.iteration == 12}</div><div class="row1">{/if}{if this.iteration == 13}</div><div class="row1">{/if}{if this.iteration == 14}</div><div class="row2">{/if}{if this.iteration == 16}</div>{/if}
	<div class="mgline">
		{if $banner}{$banner}{/if}
		{if $teaser}
		<a class="allink" {$target} {$href}></a>
		<div class="image-with-text">
			<div class="mcimg">
				<a {$target} {$href} >
					<div class="image-container">
						<div class="image-gradient">
							<img class="mcimg" {$src} />
							<!--intExchangeWagesImagePlace-->
						</div>
					</div>
				</a>
			</div>
			<div class="text-elements">
				<div class="text_on_hover">
					<div class="mctitle"><a {$target} {$href}>{$title}</a></div>
					<div class="mcdesc"><a {$target} {$href}>{$desc}</a></div>
					<div class="mcdomain"><a {$target} {$href}>{$source}</a></div>
				</div>
			</div>
		</div>
		{/if}
	</div>
	{/foreach}
</div>
</div>
`.replace(/[\r\n]/g, "")), this.setStyles(".mgbox * { -webkit-transition: all .25s; -moz-transition: all .25s; -ms-transition: all .25s; -o-transition: all .25s; transition: all .25s; } .mgbox { padding: 0 !important; position: relative !important; text-align: center; vertical-align: top !important; margin: 0 auto; border-style: none; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; line-height: 100% !important; transition: none !important; box-sizing: border-box; width: 100%; max-width: 680px; font-family: Arial; } .mgheader { border-bottom: 1px solid #ccc !important; padding-bottom: 3px; margin-bottom: 10px; } .mgheader div a { position: relative; top: -5px; } .mgheader div img { position: relative; top: 5px; height: 27px; } .mghead { color: #333; font-size: 17px; line-height: 1.2; text-transform: uppercase !important; margin: 5px 0 0 0 !important; font-family: Arial; font-weight: 400; } .mgline { background: transparent; cursor: pointer; display: inline-block; _overflow: hidden; *zoom: 1; *display: inline; border: none; box-sizing: border-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; word-wrap: break-word; vertical-align: top; position: relative; margin-bottom: 5px; } .mgline .allink { height: 100%; width: 100%; display: block; position: absolute; cursor: pointer; z-index: 999; } .mgline .image-with-text { width: 100% !important; height: auto; max-width: 100%; margin: 0 auto; position: relative; } .mgline .image-container { position: relative; } div.mcimg { padding: 0; text-align: center; display: block !important; } .mgline:hover:not(.vrline) div.mcimg { opacity: 0.8 !important; } img.mcimg { border-style: none; width: 100%; height: auto !important; max-width: 680px; max-height: 385px; box-sizing: border-box; display: block; margin: 0; } .mgline .text-elements { padding-top: 10px; } .text-elements a { text-decoration: none; } .mgline .text_on_hover a { top: 0; left: 0; } .mctitle { text-align: left; } .mctitle a { font-family: Arial; font-weight: bold; font-size: 20px; line-height: 22px; font-style: normal; text-decoration: none; color: #333; letter-spacing: -0.4px; } .mgline:hover .mctitle a { color: #0F4B81; text-decoration: none; } .mcdesc { display: none; text-align: left; } .mcdesc a { font-family: Arial; font-weight: normal; font-size: 16px; line-height: 20px; font-style: normal; text-decoration: none; color: #a9a9a9; } .mcdomain { display: block; text-align: left; margin-top: 10px; } .mcdomain a { font-family: Arial; font-weight: 400; font-size: 17px; line-height: 16px; font-style: normal; text-decoration: none; color: #A9A9A9; display: block; overflow: hidden; text-transform: uppercase; letter-spacing: 0.85px; } @supports not (flex-wrap: wrap) { .mgbox { display: block !important; } .mgline { display: inline-block !important; } } img.mcimgad { position: absolute; bottom: 0; right: 0; z-index: 10; opacity: 0.7; width: 20px; height: 20px; } .mgbox .row1, .mgbox .row2 { display: flex; flex-direction: row; flex-wrap: wrap; width: 100%; max-width: 100%; position: relative; margin: 0 0 5px !important; } .mgbox .row1 .mgline { width: 100%; max-width: 100%; } .row1 .mgline img.mcimgad { left: 0; } .row1 .mgline .text_on_hover { padding: 0 0 10px; z-index: 10; } .row1 .mgline .mcdesc { margin-top: 10px; } .row1 .mgline .image-container:before { content: \\'\\'; display: inline-block; position: absolute; left: 0 !important; width: 100%; height: 100%; z-index: 10; } .mgbox .row2 .mgline { width: 49.5%; max-width: 49.5%; } .row2 .mgline .text_on_hover { padding: 0 0 10px; z-index: 10; } .row2 .mgline .mcdesc { margin-top: 5px; max-height: 32px; overflow: hidden; } .row2 .mgline .image-container:before { content: \\'\\'; display: inline-block; position: absolute; left: 0 !important; width: 100%; height: 100%; z-index: 10; } .row2 .mgline:first-child { margin-right: 1%; } .row2 .mgline .mctitle { margin-bottom: 5px !important; } .row2 .mgline .mcdesc { display: none !important; } @media (max-width: 480px) { .row1 .mgline:not(.vrline) div.mcimg { float: none; width: 100%; } .row1 .mgline div.mcimg { float: none; width: 100%; } .row1 .mgline img.mcimgad { left: inherit; } .row1 .mgline .text-elements { width: 100% !important; bottom: 0 !important; } .row1 .mgline .text_on_hover { width: auto; height: auto; } .row1 .mgline .mcdesc { margin-top: 5px; max-height: 32px; overflow: hidden; } .row2 .mgline { width: 100% !important; max-width: 100% !important; } .row2 .mgline:first-child { width: 100%; margin-right: 0; max-width: 100% !important; } .mctitle, .mcdesc { width: 100% !important; } .mctitle, .mcdesc { text-align: left !important; } .mgline { overflow: hidden; } .mghead { font-size: 15px; } .mgheader div img { max-height: 24px; } .mctitle a { font-size: 18px; line-height: 19px; letter-spacing: -0.2px; } .mcdomain a { font-size: 12px; line-height: 12px; } .mcdomain { margin-top: 5px; } } .mgbox .row2 .mgline { display: block; } ".replace(/\\'/g, "'")), this.servicerDomain = "servicer.mgid.com", this.adBlockStyles = "".replace(/\((\'|\")?\/\//g, "($1https://"), this.clickTracking = "", this.loadedType = "", this.parentCustomFuncBlocks = {}, this.childFuncBlocks = {}, this.browserId = -1, this.deviceType = "desktop", this.hrefAttr = "href", this.enabledCooperationTypes = JSON.parse('["wages"]'), this.consentData = "", this.cmpEnabled = !1, this.uspString = "", this.uspEnabled = !1, this.tcfv2Data = "", this.tcfv2Enabled = !1, this.cookieMatchingDomain = "cm.mgid.com", this.context._mgIntExchangeNews = this.context._mgIntExchangeNews || {}, this.iframePlacementType = 0, this.networkInformationType = "unknown", this.networkInformationEffectiveType = "unknown", this.networkInformationSaveData = 0, this.ampConsentData = "", this.pageUrl = "", this.refererUrl = "", this.adblockDetectResult = null, this.expressionMap = {
                    "||": k => {
                        for (let h in k)
                            if (this.expressionParser(k[h])) return !0;
                        return !1
                    },
                    "&&": k => {
                        for (let h in k)
                            if (!this.expressionParser(k[h])) return !1;
                        return !0
                    },
                    "==": k => this.expressionParser(k[0]) == this.expressionParser(k[1]),
                    "!=": k => this.expressionParser(k[0]) != this.expressionParser(k[1]),
                    "+": k => this.expressionParser(k[0]) + this.expressionParser(k[1]),
                    "-": k => this.expressionParser(k[0]) - this.expressionParser(k[1]),
                    "*": k => this.expressionParser(k[0]) * this.expressionParser(k[1]),
                    "/": k => this.expressionParser(k[0]) / this.expressionParser(k[1]),
                    "%": k => this.expressionParser(k[0]) % this.expressionParser(k[1])
                }, this.getQueryParameterByName = k => {
                    k = k.replace(/[\[\]]/g, "\\$&");
                    let y = new RegExp("[?&]" + k + "(=([^&#]*)|&|#|$)").exec(this.app.context.location.href);
                    return y ? y[2] ? decodeURIComponent(y[2].replace(/\+/g, " ")) : "" : null
                }
            }
            setStyles(e) {
                this.app.styles = e.replace(/\((\'|\")?\/\//g, "($1" + this.app.webProtocol + "//")
            }
            setTemplate(e) {
                e = e.replace(/^\s*[\r\n]|\s{2,}/gm, ""), e = e.replace(/\((\'|\")?\/\//g, "($1" + this.app.webProtocol + "//"), e = e.replace('src="//', 'src="' + this.app.webProtocol + "//"), this.app.templateText = e.replace('href="//', 'href="' + this.app.webProtocol + "//")
            }
            MarketCutStr(e, i, o) {
                if (e.length <= i) return e;
                let p = [];
                p = e.split(" ");
                let c = p[0] + " ",
                    w;
                for (let k = 1; k < p.length; k++) {
                    if (w = c + p[k], w.length > i) return c + (typeof o > "u" || o ? "..." : "");
                    c += p[k] + " "
                }
                return e
            }
            MarketParseStr(e, i) {
                let o = [],
                    p, c = "";
                for (o = e.split(" "), p = 0; p < o.length; p++) o[p].length > i && o[p].search(/&\w+;/) < 0 ? c += o[p].substr(0, i) + " " + o[p].substr(i) + " " : c += o[p] + " ";
                return c
            }
            prepareTitle(e) {
                return e = this.app.MarketCutStr(e, 75, 1), e
            }
            prepareDesc(e) {
                return e = this.app.MarketCutStr(e, 75), e
            }
            isArray(e) {
                return Object.prototype.toString.call(e) === "[object Array]"
            }
            hidePreloadDiv() {
                this.app.fallbackMode ? this.app.fallbackMode && this.app.countLoadBlocks === 0 && (this.app.root.innerHTML = "", this.app.context.document.getElementById("M" + 872416 + "PreloadC" + 1435486) && (this.app.context.document.getElementById("M" + 872416 + "PreloadC" + 1435486).style.display = "none")) : ["MarketGidPreloadC" + this.app.containerId, "M" + 872416 + "PreloadC" + this.app.containerId, "MarketGidPreloadN" + this.app.containerId, "M" + 872416 + "PreloadN" + this.app.containerId].every(i => {
                    let o = this.app.context.document.getElementById(i);
                    return o ? (o.style.display = "none", !1) : !0
                })
            }
            prerenderNews(e) {
                if (this.app.root && e) {
                    this.app.fallbackMode && this.app.countLoadBlocks === 0 && (this.app.root.innerHTML = ""), this.advertLinkBlock.refreshAdvertLink(), e = this.app.advertLinkBlock.parseAdvertLink(e), this.app.addPreRenderTemplate(e);
                    let i = this.app.root.getElementsByTagName("a");
                    for (let o = 0; o < i.length; o++) i[o].rel = "sponsored nofollow noopener"
                }
            }
            loadNewsPrestart(e) {
                if (this.app.hidePreloadDiv(), this.app.iteration = 1, typeof e < "u") {
                    this.app.servicerData = e;
                    let i = {
                        page: this.app.pagesServicerData.length + 1,
                        servicerData: this.app.servicerData
                    };
                    if (this.app.pagesServicerData.push(i), typeof e.dt < "u" && (this.app.deviceType = e.dt), typeof e.brid < "u" && (this.app.browserId = e.brid), typeof this.app.servicerData < "u" && typeof this.app.servicerData.css < "u" && (this.app.styles = this.app.servicerData.css, this.app.stylesheetsBlock.add("split_style", this.app.servicerData.css), this.app.stylesheetsBlock.remove("main")), typeof this.app.servicerData < "u" && typeof this.app.servicerData.t < "u" && this.app.servicerData.t !== "") {
                        let o = this.app.servicerData.t.replace(/\r?\n/g, "");
                        this.app.setTemplate(o)
                    }
                }
            }
            preloadVideoWidgetResources() {
                let e = this.app.servicerData.dt ? this.app.servicerData.dt : "desktop",
                    i = this.app.servicerData.config.formats.filter(o => o.device === e)[0];
                if (i) {
                    let {
                        protocol: o
                    } = this.context.document.location, p = o.indexOf("http") !== -1 ? `${o}//` : "https://", c = this.app.currentSubnetDomain, w = `video-native.${c}/mgPlayer/css`, k = `mgStyles${this.id}`;
                    if (i.styleUrl) {
                        let h = i.styleUrl.replace("{{DOMAIN}}", this.app.currentSubnetDomain).replace(/^(https?:\/\/|\/\/)/, `${p}`);
                        this.appendWidgetPreloadDom(h, k, !0)
                    }(typeof i.playerType > "u" || i.playerType === "mgplayer") && this.appendWidgetPreloadDom(`${p}video-native.${c}/mgPlayer/img/mgPlayer_v2_sprite.svg`)
                }
            }
            appendWidgetPreloadDom(e, i = "", o = !1) {
                let p = this.context.document.createElement("link");
                p.setAttribute("href", e);
                let c = e.split(".").pop();
                c === "css" && (p.setAttribute("type", "text/css"), p.setAttribute("rel", "stylesheet")), c === "svg" && p.setAttribute("type", "image/svg+xml"), i && p.setAttribute("id", i), o && (p.onload = () => {
                    p.setAttribute("data-loaded", "true")
                }), this.app.isShadowRoot() ? (this.app.root.getRootNode().appendChild(p), this.context.document.head.appendChild(p.cloneNode(!0))) : this.context.document.head.appendChild(p)
            }
            loadNews(e) {
                if (typeof this.app.updatedJson < "u" && (e = this.app.updatedJson), this.app.isArray(e)) {
                    this.app.json = e;
                    let o = this.app.templateFunc(e);
                    if (this.app.root && o) {
                        if (e.length > 0 && (o = this.app.advertLinkBlock.parseAdvertLink(o)), this.app.fallbackMode && this.app.countLoadBlocks == 0 && (this.app.root.innerHTML = ""), this.app.templateContent = this.app.context.document.createElement("template"), this.app.templateContent.innerHTML = "<div>" + this.app.preTemplate + o + this.app.postTemplate + "</div>", typeof this.app.templateContent.content > "u") {
                            let w = this.app.templateContent,
                                k = document.createDocumentFragment(),
                                h = w.childNodes;
                            for (let y = 0; y < h.length; y++) k.appendChild(h[y].cloneNode(!0));
                            this.app.templateContent.content = k
                        }
                        this.app.templateContent = this.app.templateContent.content.firstChild;
                        for (let w = 0; w < this.app.beforeInjectTemplateHooks.length; w++) {
                            let k = this.app.beforeInjectTemplateHooks[w];
                            try {
                                k()
                            } catch (h) {
                                this.app.log(`BaseBlock - beforeInjectTemplateHooks hook ${k} failed`, "error", h)
                            }
                        }
                        let p = this.app.templateContent.querySelectorAll("img.mcimg");
                        if (p.length > 0)
                            for (let w = 0; w < p.length; w++) p[w].src = p[w].getAttribute("data-src"), p[w].setAttribute("alt", "");
                        let c = this.app.templateContent.querySelectorAll("video.mcvideo");
                        if (c.length > 0)
                            for (let w = 0; w < c.length; w++) {
                                let k = c[w];
                                k.onplay = function() {
                                    k.classList.add("played")
                                }, k.removeAttribute("nopin"), k.removeAttribute("crossorigin"), k.src = k.getAttribute("data-src"), typeof k.childNodes[0] < "u" && k.parentElement.appendChild(k.childNodes[0])
                            }
                        this.app.addTemplate(this.app.templateContent), this.app.renderBanners(!0)
                    }
                } else if (this.app.root && this.app.countLoadBlocks == 0) {
                    this.app.root.innerHTML = "";
                    return
                }
                if (this.app.servicerData && this.app.servicerData.muidn && this.app.servicerData.pvid && this.app.pvid != 0 && this.app.servicerData.pvid == this.app.pvid) try {
                    if (this.app.context.localStorage && this.app.context.localStorage.setItem("mgMuidn", this.app.servicerData.muidn), this.app.isAmp()) {
                        let o = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toUTCString(),
                            p = "mgMuidn=" + this.app.servicerData.muidn + ";domain=.ampproject.net;expires=" + o + ";SameSite=None;Secure";
                        this.app.context.document.cookie = p
                    }
                } catch {}
                this.app.cookieBlock.cookieStorage.page = this.app.page, this.app.cookieBlock.cookieStorage.time = new Date().getTime(), this.app.cookieBlock.setCookie();
                let i = this.app.root.getElementsByTagName("a");
                for (let o = 0; o < i.length; o++) i[o].rel = "sponsored nofollow noopener";
                this.app.countLoadBlocks++, typeof this.app.responsiveInit == "function" && this.app.responsiveInit()
            }
            addTemplate(e) {
                this.app.root.appendChild(e)
            }
            addPreRenderTemplate(e) {
                this.app.root.insertAdjacentHTML("beforeend", this.app.preTemplate + e + this.app.postTemplate)
            }
            getViewportHeight() {
                let e = this.app.context.document,
                    i = this.app.context,
                    o = "documentElement",
                    p = "clientHeight",
                    c = "clientWidth",
                    w = "innerHeight",
                    k = "innerWidth",
                    h = "scrollHeight",
                    y = "scrollWidth",
                    b = "offsetHeight",
                    d = "offsetWidth",
                    I = "offsetLeft",
                    u = "offsetTop",
                    T = "scrollTop",
                    E = "scrollLeft";
                return this.app.isAmp() ? typeof i["intersectionRect" + 1435486 + "_" + this.uniqId] < "u" ? {
                    c: i["intersectionRect" + 1435486 + "_" + this.app.uniqId].height,
                    s: i["intersectionRect" + 1435486 + "_" + this.app.uniqId].y
                } : {
                    c: i["intersectionRect" + 1435486].height,
                    s: i["intersectionRect" + 1435486].y
                } : i[k] ? {
                    c: i[w],
                    s: i.pageYOffset
                } : e[o] && e[o][c] ? {
                    c: e[o][p],
                    s: e[o][T]
                } : e.body[c] ? {
                    c: e.body[p],
                    s: e.body[T]
                } : 0
            }
            renderItem(e, i, o, p) {
                let c = [];
                if (typeof this.customBanners[this.app.id] < "u" && typeof this.customBanners[this.app.id][this.app.iteration] < "u" && this.customBanners[this.app.id][this.app.iteration].length > 0 && !p) {
                    let h = this.customBanners[this.app.id][this.app.iteration];
                    this.consentDataParams && (typeof this.consentDataParams.gdprApplies < "u" && typeof this.consentDataParams.consentData < "u" && (h = h.replace(/\${GDPR}/g, this.consentDataParams.gdprApplies).replace(/\${GDPR_CONSENT}/g, this.consentDataParams.consentData)), typeof this.consentDataParams.uspString < "u" && (h = h.replace(/\${CCPA}/g, this.consentDataParams.uspString))), e = {
                        html: h,
                        useSecureIframe: !0
                    }
                }
                let w = "",
                    k = "mgBanner_" + 1435486 + "_" + this.app.page + "_" + this.app.iteration;
                if ("html" in e && !p) {
                    e.h && (this.app.teaserData[e.h] = {
                        type: "banner",
                        coopType: "w",
                        imp: typeof e.imp < "u" ? e.imp : [],
                        page: this.app.page,
                        iteration: this.app.iteration,
                        other: {
                            impt: typeof e.impt < "u" ? e.impt : []
                        }
                    });
                    let h = "100%";
                    typeof e.width < "u" ? h = e.width + "px" : typeof this.app.preRenderTeaserSizes[this.app.iteration - 1] < "u" && (h = this.app.preRenderTeaserSizes[this.app.iteration - 1].width + "px");
                    let y = "100%";
                    typeof e.height < "u" ? y = e.height + "px" : typeof this.app.preRenderTeaserSizes[this.app.iteration - 1] < "u" && (y = this.app.preRenderTeaserSizes[this.app.iteration - 1].height + "px");
                    let b = "width: " + h + "; height: " + y + "; border: 0px; margin: auto; overflow: hidden; position: relative;z-index: 1;";
                    w = '<iframe id="' + k + '" scrolling="no" style="' + b + '"></iframe>', c.push("mgline-banner"), this.app.stylesheetsBlock.add("mgline-banner", `.mgline-banner {  display: inline-flex;
  background: initial;
  }`), typeof e.rs > "u" && (e.rs = !1), !1 && (e.rs = !0), e.iteration = this.app.iteration, this.app.banners[k] = e, e = ["", this.app.iteration]
                }
                if (this.app.isArray(e) && e.length) {
                    let h = this.app.prepareTeaserData(e);
                    typeof h.hash < "u" && typeof h.id < "u" && (this.app.teaserHashes[h.id] = h.hash), c.push("teaser-" + h.id), "l" in h.other && h.other.l.match(/[\?|&]u=/) != null && c.push("dsp"), "type" in h.other && (c.push("type-" + h.other.type), h.other.type == "v" && c.push("vrline"));
                    let y = E => E && E.indexOf("//") === 0 ? this.app.webProtocol + E : E,
                        b = h.price.replace(new RegExp("[^0-9.]"), ""),
                        d = h.priceold.replace(new RegExp("[^0-9.]"), ""),
                        I = h.hash;
                    w !== "" && this.app.banners[k] && this.app.banners[k].h && (I = this.app.banners[k].h);
                    let u = h.other.type !== "v" ? this.app.hrefAttr + '="' + this.app.prepareNiceHref(h.hash) + '" data-hash="' + h.hash + '"' : "";
                    typeof h.hash > "u" && (u = 'onclick="return false"');
                    let T = [
                        [/\{\*.*?\*\}/, ""],
                        [/\{\$href\}/g, u],
                        [/\{\$pmc_item\}/, this.app.id],
                        [/\{\$hash\}/g, h.hash],
                        [/\{\$target\}/g, typeof h.other.type < "u" && h.other.type == "i" || typeof this.app.servicerData.ats < "u" && this.app.servicerData.ats ? 'target="_top"' : 'target="_blank"'],
                        [/(class\=\".*?)(mgline)([^\"]*\")/, "$1$2 " + c.join(" ") + '$3 data-i="' + I + '"'],
                        [/(class\=\'.*?)(mgline)([^\']*\')/, "$1$2 " + c.join(" ") + '$3 data-i="' + I + '"'],
                        [/\{\$source\}/g, h.source],
                        [/\{\$src\}/g, 'width="492" height="277" data-i="' + h.id + '" data-src="' + y(h.other.i) + '" nopin="nopin"' + (h.other.extimg === 1 ? "" : " crossOrigin")],
                        [/\{\$title\}/g, this.app.htmlEntities(h.title)],
                        [/\{\$desc\}/g, this.app.htmlEntities(h.desc)],
                        [/\{\$iteration\}/g, this.app.iteration],
                        [/\$iteration/g, this.app.iteration],
                        [/this\.iteration/g, this.app.iteration],
                        [/\{\$price\}/g, h.price],
                        [/\{\$priceold\}/g, h.priceold],
                        [/\{\$discount\}/g, h.discount],
                        [/\{if \$price\}/g, "{if '' != " + b + "}"],
                        [/\{if !\$price\}/g, "{if '' == " + b + "}"],
                        [/\{if \$priceold\}/g, "{if '' != " + d + "}"],
                        [/\{if \$price != " "\}/g, "{if " + h.price.trim().length + " != 0}"],
                        [/\{if \$price == " "\}/g, "{if " + h.price.trim().length + " == 0}"],
                        [/\$priceold/g, h.priceold],
                        [/\$price/g, h.price],
                        [/\{if \$rep\}/g, "{if p.isReplic}"],
                        [/\{\$banner\}/g, w],
                        [/\{if \$teaser\}/g, "{if '' == '" + w + "'}"],
                        [/\{if \$banner\}/g, "{if '' != '" + w + "'}"],
                        [/\{\$category\}/g, h.other.category || ""],
                        [/\{\$cta\}/g, typeof h.other.cta < "u" ? h.other.cta : ""],
                        [/\{if \$cta\}/g, "{if '" + (typeof h.other.cta < "u" ? h.other.cta : "") + "' != ''}"],
                        [/\{if !\$cta\}/g, "{if '" + (typeof h.other.cta > "u" ? h.other.cta : "") + "' != ''}"],
                        [/\{\$disclaimer\}/g, typeof h.other.cdt < "u" ? h.other.cdt : ""],
                        [/\{if \$disclaimer\}/g, "{if '" + (typeof h.other.cdt < "u" ? h.other.cdt : "") + "' != ''}"],
                        [/\{if !\$disclaimer\}/g, "{if '" + (typeof h.other.cdt > "u" ? h.other.cdt : "") + "' != ''}"],
                        [/\{\$sourceName\}/g, this.app.sourceName]
                    ];
                    for (let E = 0; E < T.length; E++) i = i.replace(T[E][0], T[E][1]);
                    for (i = i.replace(/\r?\n/g, "");;) {
                        let E = i,
                            W = /\{if ([^\}]*?)\}(((?!\{(?:\/)?if).)*)\{\/if\}/g;
                        if (i = i.replace(W, (S, C, R) => this.app.expressionParser(C) ? R : ""), E == i) break
                    }
                    if (typeof h.other.i < "u" && (h.other["media-type"] == "video" || h.other.i.match(/\.mp4/))) {
                        let W = /<img class="mcimg" width="(\d+)" height="(\d+)"/.exec(i),
                            S = W ? W[1] + "px;" : "100%;",
                            C = W ? W[2] + "px;" : "100%;";
                        i = i.replace(/<img( class="mcimg[^>]+)/, '<video autoplay loop muted webkit-playsinline playsinline class="mcvideo" $1'), this.app.stylesheetsBlock.add("video", `video.mcvideo { border-style: solid;
  border-color: #ffffff;
  border-width: 0;
  width: 100%;
  height: auto;
  max-width: ` + S + `
  max-height: ` + C + `
  box-sizing: border-box;
  display: block; }`)
                    }
                    if (typeof h.other.mirror < "u" && h.other.mirror == 1) {
                        let E = "-moz-transform: scaleX(-1); -o-transform: scaleX(-1); -webkit-transform: scaleX(-1); -ms-transform: scaleX(-1); transform: scaleX(-1);";
                        i = i.replace(/<img( class="mcimg)/, '<img style="' + E + '" class="mcimg')
                    }
                    if (h.other.extimg === 1 && this.app.preRenderImageSizes[o]) {
                        let E = this.app.preRenderImageSizes[o].width,
                            W = this.app.preRenderImageSizes[o].height;
                        if (W == 0 || E == 0) i = i.replace(/<img( class="mcimg")/, '<img class="mcimg mg-wrong-image"');
                        else {
                            let S = {
                                    width: E + "px !important",
                                    height: W + "px !important",
                                    "object-fit": "cover",
                                    "-o-object-fit": "cover",
                                    "object-position": "top",
                                    "-o-object-position": "top"
                                },
                                C = "";
                            Object.keys(S).forEach(function(R) {
                                C += R + ":" + S[R] + ";"
                            }), i = i.replace(/<img( class="mcimg")/, '<img class="mcimg" style="' + C + '"')
                        }
                    }
                    return this.app.iteration++, i
                }
            }
            renderBanners(e, i) {
                for (let o in this.app.banners)
                    if (this.app.banners[o].rs != e) {
                        if (!e) {
                            if (this.app.banners[o].iteration != i) continue;
                            this.app.banners[o].rs = !1
                        }
                        if (this.app.banners[o].isRendered === !0) continue;
                        let p = this.app.root.querySelector("#" + o),
                            c = this.app.banners[o].html,
                            w = !1;
                        if (this.app.banners[o].clickUrl && c.indexOf("${CLICK_PIXEL}") !== -1) {
                            let h = this.app.allowReturnParams;
                            this.app.allowReturnParams = !0, c = c.replace(/\${CLICK_PIXEL}/g, this.app.banners[o].clickUrl + this.app.getAntifraudQueryParameter(this.app.banners[o].clickUrl)), w = !0, this.app.allowReturnParams = h
                        }
                        c.indexOf("{page_url}") !== -1 && (c = c.replace(/{page_url}/g, this.app.pageUrl)), c.indexOf("{referrer_url}") !== -1 && (c = c.replace(/{referrer_url}/g, this.app.refererUrl));
                        let k = '<!DOCTYPE html><html><body style="margin: 0;">' + c + "</body></html>";
                        this.app.banners[o].useSecureIframe ? this.app.renderInSafeIframe(p, `banner_${o}`, k) : (p.contentWindow.document.open(), p.contentWindow.document.write(k), p.contentWindow.document.close()), this.app.banners[o].isRendered = !0, w || (h => {
                            p.contentWindow.document.body.addEventListener("click", y => {
                                let b = y.target,
                                    d = !1;
                                for (; b.parentElement;)
                                    if (b.tagName === "A") {
                                        d = !0;
                                        break
                                    } else b = b.parentElement;
                                d && this.app.request.pixel("bannerClickTracker", this.app.banners[h].clickUrl, {
                                    k: this.app.getAntifraudQueryParameter(this.app.banners[h].clickUrl)
                                }, {})
                            }, !0)
                        })(o)
                    }
            }
            renderInSafeIframe(e, i, o) {
                e.sandbox = "allow-scripts allow-popups";
                let p = this.app.context.location.href.indexOf("admin.") === -1 && this.app.context.location.href.indexOf("dashboard.") === -1 && this.app.context.location.href.indexOf("panel.") === -1;
                14 > 0 && p && (e.sandbox = "allow-same-origin allow-scripts allow-popups"), "srcdoc" in e ? e.srcdoc = o : (e.src = this.app.webProtocol + `//cdn.mgid.com/widgets/framehost.html#${i}`, this.app.context.addEventListener("message", c => {
                    c.origin === this.app.webProtocol + "//cdn.mgid.com" && c.data === `loaded #${i}` && e.contentWindow.postMessage(o, "*")
                }, !1))
            }
            expressionParser(e) {
                for (let i in this.app.expressionMap)
                    if (e.indexOf(i) !== -1) return this.app.expressionMap[i](e.split(i));
                return (e || "").replace(/^([\'|\s]+)|([\'|\s]+)$/g, "")
            }
            generateTemplate(e) {
                return this.templateText = e, this.templateFunc = (i, o) => {
                    if (i.length === 0) {
                        this.app.isAmp() && this.context.context.noContentAvailable();
                        return
                    }
                    let p = /(.*)?\{foreach\}(.*)?\{\/foreach\}(.*)?/.exec(this.app.templateText);
                    if (!p) return;
                    let c = typeof p[1] < "u" ? p[1] : "";
                    for (let w = 0; w < i.length; w++) {
                        let k = this.app.renderItem(i[w], p[2], w, o);
                        c += typeof k < "u" ? k : ""
                    }
                    return c += typeof p[3] < "u" ? p[3] : "", c
                }, !0
            }
            getPageCount() {
                let e = parseInt(0),
                    i = parseInt(20);
                return e && i ? Math.min(e, i) : e || i
            }
            init() {
                if (this.app.countersBlock.widgetPerformancePixel("init"), typeof JSON != "object" && (this.app.hidePreloadDiv(), this.app.log("Unsupported browser", "error")), this.app.canUseShadowDom()) {
                    let e = this.app.root;
                    try {
                        e.parentNode.attachShadow({
                            mode: "open"
                        }).appendChild(e)
                    } catch (i) {
                        this.app.log("Shadow DOM can't be attached: ", "error", i)
                    }
                }
                if (this.app.root) {
                    this.app.cookieBlock.getCookie();
                    let e = parseInt(this.app.cookieBlock.cookieStorage.page),
                        i = this.app.context["MarketGidPageOffset"] ? parseInt(this.app.context["MarketGidPageOffset"]) : 0;
                    this.app.addClickHandler(this.app.clickHandlerList.hangNiceLinkListener.handler, this.app.clickHandlerList.hangNiceLinkListener.priority), this.app.addEvent(this.app.root, "mouseup", this.app.eventsHangNiceLinkListener), this.app.addEvent(this.app.root, "contextmenu", this.app.eventsHangNiceLinkListener), this.app.addEvent(this.app.root, "touchstart", this.app.eventsHangNiceLinkListener);
                    let o = this.app.getPageCount();
                    if (e != null && e < o && e > 0 ? this.app.page = e + 1 : (e > o - 1 || e < 1) && (this.app.page = 1 + i), new Date().getTime() - (typeof this.app.cookieBlock.cookieStorage.time < "u" ? this.app.cookieBlock.cookieStorage.time : 0) >= 6e5 && (this.app.page = 1 + i), this.app.page || (this.app.page = 1), this.app.pageUnlim = this.app.page - 1, this.app.cookieBlock.cookieStorage.page = this.app.page, this.app.cookieBlock.setCookie(), !this.app.context.document.cookie) {
                        let p = new Date;
                        this.app.page = p.getSeconds() % o + 1
                    }
                    if (this.app.blocksAddress = this.app.webProtocol + "//" + this.app.servicerDomain + "/", this.app.clickTracking = typeof this.app.context.MGClickTracking < "u" ? this.app.context.MGClickTracking : "", this.app.adBlockStatement = !1, this.app.adBlockStatement && (this.app.getRoot().classList.add("eyeo"), this.app.rtbDisabled = 1), this.app.adBlockStatement && this.app.setTemplate("".replace(/[\r\n]/g, "")), !this.app.generateTemplate(this.app.templateText)) return;
                    this.app.context.onClickExcludes = this.app.context.onClickExcludes || [], this.app.context.onClickExcludes.push(this.app.root), this.app.adBlockStatement ? this.app.stylesheetsBlock.add("adBlockMain", this.app.adBlockStyles) : this.app.stylesheetsBlock.add("main", this.app.styles), this.app.addEvent(this.app.root, "click", this.app.widgetClickHandler), this.app.addEvent(this.app.root, "auxclick", this.app.widgetClickHandler)
                }
            }
            resetPage() {
                this.app.page = 1
            }
            getMostTopWindow() {
                let e = this.app.context;
                for (; e != e.parent;) try {
                    let i = e.parent.document.body;
                    e = e.parent
                } catch {
                    break
                }
                return e
            }
            getDevicePixelRatio() {
                let e = 1;
                return typeof this.app.context.devicePixelRatio < "u" ? e = this.app.context.devicePixelRatio : typeof this.app.context.screen.systemXDPI < "u" && typeof this.app.context.screen.logicalXDPI < "u" && this.app.context.screen.systemXDPI > this.app.context.screen.logicalXDPI && (e = this.app.context.screen.systemXDPI / this.app.context.screen.logicalXDPI), e % 1 === 0 || (e = e.toFixed(3)), e
            }
            getCbusterParameter() {
                return "cbuster=" + (this.app.context.MG_CacheBuster || new Date().getTime() + "" + Math.floor(Math.random() * 1e9 + 1))
            }
            injectScript(e, i) {
                this.app.root.dispatchEvent(this.app.beforeInjectScriptEvent), this.app.injectionScriptMethod(e, i)
            }
            createServicerScriptElement(e, i) {
                let o = this.app.context.document.createElement("script"),
                    p = `MarketGidC${1435486}DisableStart`,
                    c = `mgDisableStart${1435486}`,
                    w = typeof this.app.context[p] < "u";
                w || (w = typeof this.app.context[c] < "u"), o.type = this.app.initServicerRequest || !w ? "text/javascript" : "text/plain", o.charset = "utf-8", o.referrerPolicy = "strict-origin-when-cross-origin";
                let k = 1435486;
                this.app.adBlockStatement && Object.keys(this.app.childWidgetsData).some(b => {
                    let d = this.app.childWidgetsData[b];
                    if (d.showMonetizationEnabled === 1 && typeof d.childId < "u") return k = d.childId, this.app.requestParams.src_cid = "src_cid=" + this.app.originalId, !0
                });
                let h = e ? "fs/" : "",
                    y = this.app.blocksAddress + h;
                if (this.app.initServicerRequest ? y = this.app.webProtocol + "//c.mgid.com/pv/" + h : y += k + "/" + i, Array.isArray(this.app.context.document.mgExceptIds)) {
                    let b = y.indexOf("?") > -1 ? "&" : "?",
                        d = this.app.context.document.mgExceptIds.join(",");
                    if (y.indexOf("except_ads") > -1) {
                        let I = new RegExp("([?&])except_ads=(.*?)(&|$)", "i");
                        y = y.replace(I, "$1except_ads=$2," + d + "$3"), y = y.replace("=,", "=")
                    } else y += `${b}except_ads=${d}`
                }
                return o.src = y, o
            }
            getLocalStorageMuid() {
                let e = null;
                try {
                    this.app.context.localStorage && (e = this.app.context.localStorage.getItem("mgMuidn"))
                } catch {}
                return e
            }
            getCookieValue(e) {
                let i = "";
                try {
                    let o = this.app.context.document.cookie.split("; ").filter(p => p.indexOf(e) !== -1);
                    o.length && (i = o[0].split("=")[1])
                } catch (o) {
                    this.app.log("getCookieValue Failed", "error", o)
                }
                return i
            }
            injectionScriptMethod(e, i) {
                this.app.adBlockStatement && (this.app.requestParams.adb = "adb=1", typeof this.app.rtbDisabled < "u" && (this.app.requestParams.rtb_disabled = "rtb_disabled=" + this.app.rtbDisabled));
                let o = this.app.createServicerScriptElement(e, this.app.page);
                if (typeof this.app.context.MGi < "u" && (this.app.requestParams.iso = "iso=" + this.app.context.MGi, this.app.requestParams.token = "token=ff0320f53e9cb1d1df5dae9f8cab3e23"), this.app.requestParams.pv = "pv=5", typeof this.app.context["ampOptions" + 1435486 + "_" + this.app.uniqId] < "u") try {
                    let C = JSON.parse(this.app.context["ampOptions" + 1435486 + "_" + this.app.uniqId]);
                    this.app.requestParams.src_id = "src_id=" + (typeof C.src_id < "u" ? C.src_id : this.app.sourceName)
                } catch {}
                this.app.requestParams.cbuster = this.app.getCbusterParameter();
                let p = "";
                if (JSON.parse('["wages"]').indexOf("int_exchange") >= 0) {
                    let C = this.app.context.document.querySelector('meta[property="og:title"]');
                    if (this.app.context !== this.app.context.top) try {
                        C = this.app.context.parent.document.querySelector('meta[property="og:title"]')
                    } catch {}
                    C && (this.app.requestParams.ogtitle = "ogtitle=" + encodeURIComponent(C.getAttribute("content")))
                }
                this.app.uniqId != "" && (this.app.requestParams.uniqId = "uniqId=" + this.app.uniqId), this.app.getActiveChilds().length && (this.app.requestParams.childs = "childs=" + this.app.getActiveChilds().join(",")), i && (this.app.requestParams.rsh = "rsh=" + i, this.app.requestParams.initial_composite = "initial_composite=" + this.app.id), typeof this.app.context.MG_setRequestNonPersonalizedAds < "u" && this.app.context.MG_setRequestNonPersonalizedAds == 1 && (this.app.requestParams.npa = "npa=1"), this.app.getInternalIds().length != 0 && (this.app.requestParams.viewedInternalIds = "exclude_int_exchange=" + this.app.getInternalIds().join(",")), this.consentDataParams = this.app.consentsBlock.getConsentData(), this.consentDataParams && Object.keys(this.consentDataParams).forEach(C => {
                    let R = this.consentDataParams[C];
                    this.app.requestParams[C] = `${C}=${R}`
                }), this.app.requestParams.lct = "lct=" + this.getLct(1682580438);
                try {
                    let C = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    typeof C.type < "u" && (this.app.networkInformationType = C.type, this.app.requestParams.nit = "nit=" + this.app.networkInformationType), typeof C.effectiveType < "u" && (this.app.networkInformationEffectiveType = C.effectiveType, this.app.requestParams.niet = "niet=" + this.app.networkInformationEffectiveType), typeof C.saveData < "u" && (this.app.networkInformationSaveData = C.saveData ? 1 : 0, this.app.requestParams.nisd = "nisd=" + C.saveData)
                } catch {}
                this.app.requestParams.jsv = "jsv=es6";
                let c = o.src;
                c.indexOf("?") == -1 ? c += "?" : c += "&";
                let w = [];
                for (let C in this.app.requestParams) w.push(this.app.requestParams[C]);
                let k = this.app.isIframe(),
                    h = !0,
                    y = !1,
                    b = this.app.context,
                    d = this.app.context;
                if (k)
                    for (;;) {
                        try {
                            b.frameElement && b.frameElement.src != "" && (h = !1), b.document.body
                        } catch {
                            b = d, y = !0, h = !1;
                            break
                        }
                        if (b == b.parent) break;
                        d = b, b = b.parent
                    }
                let I = "";
                try {
                    this.app.isAmp() ? (this.app.iframePlacementType = 3, this.app.pageUrl = typeof this.app.context.context.sourceUrl < "u" ? this.app.context.context.sourceUrl : "", this.app.refererUrl = typeof this.app.context.context.referrer < "u" ? this.app.context.context.referrer : "", this.app.pageUrl != "" ? I = this.app.pageUrl : I = this.app.refererUrl) : (this.app.pageUrl = b.document.location.href, this.app.refererUrl = b.document.referrer || "", I = this.app.refererUrl, k && !h && (y ? this.app.iframePlacementType = 2 : (I = this.app.pageUrl, this.app.iframePlacementType = 1)))
                } catch {
                    this.app.iframePlacementType = 2
                }
                if (this.app.iframePlacementType != 0 && w.push("iframe=" + this.app.iframePlacementType), w.push("ref=" + encodeURIComponent(I)), typeof this.app.contextBlock.contextUriParse == "function" && w.push("cxurl=" + encodeURIComponent(this.app.contextBlock.contextUriParse())), typeof this.app.globalSettings.retention_tool_widget_utm == "string" && this.app.globalSettings.retention_tool_widget_utm.length && !this.app.isAmp()) {
                    let C = this.app.globalSettings.retention_tool_widget_utm,
                        et = (this.app.pageUrl || this.app.context.location.href || "").split("&").filter(mt => mt.indexOf(C) !== -1).slice(0, 1).join("");
                    et = et.substring(et.indexOf(C)), et && w.push(et)
                }
                try {
                    let C = JSON.parse(localStorage._mgSessionsList || "[]");
                    if (!sessionStorage.MG_Session_lastUpdate || Number(sessionStorage.MG_Session_lastUpdate) + 30 * 60 * 1e3 < Date.now()) {
                        let R = this.app.refererUrl.match(/:\/\/([^\/:]+)/i);
                        sessionStorage.MG_Session_pr = R && R[1] ? R[1] : "", sessionStorage.MG_Session_lu = this.app.pageUrl, sessionStorage.MG_Session_Id = Math.round(Date.now() / 1e3).toString(16) + "-" + ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5)
                    }
                    sessionStorage.MG_Session_lastUpdate = Date.now(), sessionStorage && sessionStorage.MG_Session_pr && w.push("pr=" + encodeURIComponent(sessionStorage.MG_Session_pr)), sessionStorage && sessionStorage.MG_Session_lu && w.push("lu=" + encodeURIComponent(sessionStorage.MG_Session_lu)), sessionStorage.MG_Session_Id && w.push("sessionId=" + encodeURIComponent(sessionStorage.MG_Session_Id))
                } catch {}
                this.app.pvid || (this.app.pvid = this.app.generatePvid());
                let u = 0;
                if (this.app.context["isFBIA" + 1435486] && this.app.context.localStorage) {
                    let C = this.app.context.localStorage.getItem("_mgPageView" + 872416),
                        R = this.app.globalSettings.ia_page_view_timeout || 180;
                    (!C || new Date().getTime() - C > R * 1e3) && !this.app.initServicerRequest && (this.app.context.localStorage.setItem("_mgPageView" + 872416, new Date().getTime()), u = 1), this.app.initServicerRequest && (this.app.context.localStorage.setItem("_mgPageViewEndPoint" + 872416, new Date().getTime()), this.app.context.localStorage.setItem("_mgPvidTime", new Date().getTime()), u = 1);
                    let et = this.app.context.localStorage.getItem("_mgPvid");
                    et && (this.app.pvid = et)
                } else {
                    let C = this.app.getMostTopWindow(),
                        R = C.location.pathname;
                    C["_mgPageView" + 872416] = C["_mgPageView" + 872416] || [];
                    let et = C["_mgPageView" + 872416];
                    C["_mgPageViewEndPoint" + 872416] = C["_mgPageViewEndPoint" + 872416] || [];
                    let mt = C["_mgPageViewEndPoint" + 872416];
                    Array.isArray(et) && et.indexOf(R) === -1 && !this.app.initServicerRequest && (et.push(R), u = 1), Array.isArray(mt) && mt.indexOf(R) === -1 && this.app.initServicerRequest && (mt.push(R), u = 1), typeof C._mgPvid > "u" && this.app.initServicerRequest && (C._mgPvid = this.app.pvid), typeof C._mgPvid < "u" && (this.app.pvid = C._mgPvid)
                }
                w.push("pageView=" + u), w.push("pvid=" + this.app.pvid), this.app.initServicerRequest && w.push("site=" + 872416), this.app.context["isFBIA" + 1435486] ? w.push("implVersion=" + 14) : this.app.isAmp() ? w.push("implVersion=" + 12) : this.app.versionWidget != "" && w.push("implVersion=" + this.app.versionWidget), w.push("dpr=" + this.app.getDevicePixelRatio());
                let T = this.app.isAmp() ? this.app.getCookieValue("mgMuidn") : this.app.getLocalStorageMuid();
                T && (w.push("muid=" + T), this.app.muid = T);
                let E = this.app.context?.performance.getEntriesByType?.("navigation")[0]?.responseEnd,
                    W = this.app.context?.performance.now?.(),
                    S = Math.round(W - E);
                typeof S == "number" && !isNaN(S) && w.push("tfre=" + S), c += w.join("&"), o.src = c, this.app.sspPerformance && typeof this.app.context.performance.getEntries < "u" && (o.onload = () => {
                    this.app.context.performance.getEntries().map(C => {
                        if (C.name === c) {
                            let R = Math.ceil(C.responseEnd - C.startTime);
                            this.app.request.pixel("widgetSspPerformance", this.app.webProtocol + "//c.mgid.com/widget-ssp-performance", {
                                time: `time=${R}`
                            }, {})
                        }
                    })
                }), this.app.context.document.head.appendChild(o), o.onerror = () => {
                    this.app.isAdblock = !0
                }
            }
            getActiveChilds() {
                return JSON.parse("[]")
            }
            addClickHandler(e, i) {
                this.app.clickHandlers.push({
                    handler: e,
                    priority: i
                }), this.app.clickHandlers.sort(function(o, p) {
                    return o.priority < p.priority ? -1 : 1
                })
            }
            widgetClickHandler(e) {
                e || (e = this.app.context.event), e.target || (e.target = e.srcElement);
                let i = e.target;
                if (i.tagName !== "A") {
                    i = this.app.getParentLink(i);
                    let o = !1;
                    if ("which" in e ? o = e.which === 3 : "button" in e && (o = e.button === 2), !i && !o) {
                        let p = this.app.getParentElWithClass(e.target, "text-elements");
                        if (p) {
                            let c = e.target.getElementsByTagName("A");
                            c[0] ? i = c[0] : (c = p.getElementsByTagName("A"), c[0] && (i = c[0]))
                        }
                        if (i) {
                            i.click();
                            return
                        }
                    }
                }
                if (!!i && !(!i.hasAttribute("data-hash") && !i.classList.contains("mg-close-action")))
                    for (let o = 0; o < this.app.clickHandlers.length; o++) try {
                        if (!this[this.app.clickHandlers[o].handler](i, e)) return
                    } catch (p) {
                        this.app.log("Click Handler name: " + this.app.clickHandlers[o].handler + ", error: ", "error", p)
                    }
            }
            start() {
                this.app.root && this.app.countLoadBlocks == 0 && this.app.injectScript()
            }
            defaultComposite(e) {}
            addEvent(e, i, o) {
                e.addEventListener ? (i === "touchstart" || i === "touchmove") && this.app.isPassiveSupported() ? e.addEventListener(i, o.bind(this), {
                    passive: !0
                }) : e.addEventListener(i, o.bind(this), !1) : e.attachEvent("on" + i, o.bind(this))
            }
            removeEvent(e, i, o) {
                e.removeEventListener ? e.removeEventListener(i, o, !1) : e.detachEvent("on" + i, o)
            }
            getMainCssSelector() {
                return "#" + (this.app.realRoot ? this.app.realRoot.id : this.app.root.id)
            }
            doubleClickHandler(e, i) {
                i = parseInt(i | 0);
                let o = {},
                    p = e.getAttribute("data-hash");
                o.url = "url=" + encodeURIComponent(e), o.uuid = "uuid=" + this.app.servicerData.rid, o.hash = "hash=" + p, o.cid = "cid=" + this.app.getWidgetValue("id", 1435486), o.gb_uid = "gb_uid=" + this.app.getWidgetValue("goodsPartUid", 57767475), o.h2 = "h2=" + this.app.servicerData.h2, o.type = "type=" + this.app.doubleClickType, o.checkId = "checkId=" + this.app.doubleClickCheckId, o.percent = "percent=" + this.app.doubleClickPercent, i && (o.isOut = "isOut=" + i), this.app.request.pixel("doubleclick", this.app.webProtocol + "//c.mgid.com/doubleclick", o, {})
            }
            adBlockDetect() {
                if (this.adblockDetectResult === null) {
                    let e = {
                            ABP_NOT_DETECTED: 0,
                            ABP_DETECTED: 1
                        },
                        i = ["banner_ad", "sponsored_ad"],
                        o = k => {
                            let h = this.app.context.document.createElement("div");
                            return h.className = k, h.style.setProperty("display", "block", "important"), h.style.setProperty("padding", "1px", "important"), h.style.visibility = "hidden", h.style.position = "absolute", h.innerHTML = ".", this.app.context.document.body.appendChild(h), h
                        },
                        p = k => !k.offsetHeight,
                        c = k => {
                            let h, y = k.length,
                                b;
                            for (h = 0; h < y; h++) {
                                b = o(k[h]);
                                let d = p(b);
                                if (this.app.context.document.body.removeChild(b), d) return !0
                            }
                            return !1
                        },
                        w = k => c(k) ? e.ABP_DETECTED : e.ABP_NOT_DETECTED;
                    this.adblockDetectResult = w(i)
                }
                return this.adblockDetectResult
            }
            isShadowRoot() {
                try {
                    return this.app.root.getRootNode !== "undefined" && this.app.root.getRootNode().host
                } catch {
                    return !1
                }
            }
            canUseShadowDom() {
                let e = this.app.root.parentNode;
                return Boolean(e && e.id.indexOf("ScriptRoot") > 0 && typeof e.attachShadow == "function")
            }
            getRoot() {
                return this.app.isShadowRoot() ? this.app.root.getRootNode().host : this.app.root.parentElement
            }
            generatePvid() {
                return new Date().getTime().toString(16) + (Math.round(Math.random() * 1e9) + 2147483648).toString(16)
            }
            getLct(e) {
                return e - e % 86400
            }
            isAmp() {
                return typeof this.app.context.context < "u" && typeof this.app.context.context.data < "u" && typeof this.app.context.context.data.widget < "u" ? !0 : typeof this.app.context["boundingClientRect" + 1435486] < "u" && typeof this.app.context["intersectionRect" + 1435486] < "u"
            }
            isIframe() {
                try {
                    return this.app.context.self !== this.app.context.top
                } catch {
                    return !0
                }
            }
            startMgqwp() {
                typeof this.context._mgwqp < "u" ? setTimeout(() => {
                    this.context._mgwqp()
                }, 0) : setTimeout(() => {
                    this.startMgqwp()
                }, 50)
            }
            getVideoLibVersion() {
                let e = "1.11.172",
                    i = null;
                return i !== null && (e = i[2]), e
            }
        }
    });
    var Re = {};
    ft(Re, {
        MainBlock: () => qt
    });
    var qt, Oe = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        qt = class extends $ {
            constructor(e) {
                super(e), this.cappingRealShowTime = 0, this.widgetRealShowTime = 0, this.name = "MainBlock", this.app.addEvent(this.app.root, "mousemove", i => {
                    this.app.root.mouseX = i.pageX - this.app.root.offsetLeft, this.app.root.mouseY = i.pageY - this.app.root.offsetTop
                }), this.setAppFunctions(), this.addHook("afterPrepareCappingDataHooks", () => {
                    this.cappingRealShowTime = this.app.getCurrentTimestamp()
                }), this.addHook("observerWidgetHooks", (i, o) => {
                    i && o >= .01 && (this.widgetRealShowTime = this.app.getCurrentTimestamp())
                }), this.addHook("afterLoadNewsHooks", () => {
                    this.fixWrongExternalImages()
                }), this.addHook("afterPrepareCappingDataHooks", this.renderLazyBanners), this.addHook("afterLoadNewsHooks", this.setAltToImages)
            }
            setAppFunctions() {
                this.app.extractClass = e => {
                    if (e && typeof e.className < "u") {
                        let i = e.className.replace(/\s/g, ".").split(".")[0];
                        if (i) return i.replace(`${1435486}`, "")
                    }
                    return ""
                }, this.app.getCurrentTimestamp = () => Math.floor(Date.now() / 1e3), this.app.prepareNiceHref = (e, i, o) => {
                    let p, c = this.app.teaserData[e];
                    if (c.other.sdl == 1 && c.coopType != "i") {
                        if (p = this.app.clickTracking, typeof c.other.dl < "u" && c.other.dl != "") p += c.other.dl;
                        else {
                            let w = decodeURIComponent(c[0].replace(/[`|',:\/?;$%&\(\)^*!@\s]/g, "")).toLowerCase(),
                                k = decodeURIComponent(c[3].replace(/[`|',:\/?;$%&\(\)^*!@]/g, "")).replace(/\s/g, "_");
                            p += this.app.webProtocol + "//" + (w ? w + "/" : "") + k
                        }
                        this.app.clickTracking && p.indexOf(this.app.clickTracking) !== -1 && (p = this.app.clickTracking + encodeURIComponent(p.replace(this.app.clickTracking, "")))
                    } else p = this.app.prepareHref(e, i, o);
                    return p
                }, this.app.prepareHref = (e, i, o) => {
                    let p = this.app.teaserData[e],
                        c = this.app.getQueryParameterByName("dc"),
                        w = this.getClickZone(),
                        k = "",
                        h = "";
                    if (o && this.app.context._mgExternalLinkChanger === 1) {
                        let y = o.search;
                        if (k = o.protocol + "//" + o.hostname + o.pathname, y != "") {
                            y = y.replace("?", "");
                            let b = y.split("&");
                            for (let d = 0; d < b.length; d++) {
                                let I = b[d].split("=");
                                I[0] != "k" && I[0] != "dc" && (k += (d == 0 ? "?" : "&") + b[d])
                            }
                        }
                    } else k = this.app.clickTracking + this.app.webProtocol, p ? p.link && (/^http[s]?:/.test(p.link) ? k = this.app.clickTracking + p.link : p.coopType == "i" ? k = this.app.clickTracking + this.app.intExchangeProtocol + p.link : k = this.app.clickTracking + this.app.webProtocol + p.link) : k = "#";
                    if (this.app.clickableDelay && this.app.activateDelayBlock && this.app.activateDelayBlock.isWagesLink(o) && (h = "dc=1"), h = c ? "dc=" + parseInt(c) : h, h = w !== "" && h === "" ? "dc=" + w : h, h !== "" && (k += (k.indexOf("?") >= 0 ? "&" : "?") + h), this.app.transitParamsInit) {
                        let y = this.app.getQueryParameterByName("extclckid");
                        y && /[\&\?]extclckid\=/.test(k) === !1 && (k += (k.indexOf("?") >= 0 ? "&" : "?") + "extclckid=" + y)
                    }
                    if (this.app.antifraudBlock?.getAntifraudParams && p && p.coopType != "i" && (k += this.app.getAntifraudQueryParameter(k, i, o)), this.cappingRealShowTime && /[\&\?]crst\=/.test(k) === !1 && (k += (k.indexOf("?") >= 0 ? "&" : "?") + "crst=" + this.cappingRealShowTime), this.widgetRealShowTime && /[\&\?]wrst\=/.test(k) === !1 && (k += (k.indexOf("?") >= 0 ? "&" : "?") + "wrst=" + this.widgetRealShowTime), this.app.context.transitType && /[\&\?]trt\=/.test(k) === !1 && (k += (k.indexOf("?") >= 0 ? "&" : "?") + "trt=" + this.app.context.transitType), this.app.clickTracking && k.indexOf(this.app.clickTracking) !== -1 && (k = this.app.clickTracking + encodeURIComponent(k.replace(this.app.clickTracking, ""))), o && /[\&\?]wct\=/.test(k) === !1 && this.getParameterFromLink(o, "wct") && (k += (k.indexOf("?") === -1 ? "?" : "&") + this.getParameterFromLink(o, "wct")), i?.type === "click") {
                        let y = i.target,
                            b = "." + this.app.extractClass(y),
                            d = y.tagName;
                        if (d === "A") {
                            let I = y.parentNode;
                            d = I.tagName, b = "." + this.app.extractClass(I)
                        }(!p || p.coopType !== "i" && p.coopType !== "dpd") && (k += (k.indexOf("?") >= 0 ? "&" : "?") + "ce=" + d + b)
                    }
                    if (p && p.coopType != "i" && p.coopType != "dpd") try {
                        if (this.app.context.localStorage) {
                            let y = this.app.context.localStorage.getItem("mgMuidn");
                            typeof y == "string" && y.length > 0 && k.indexOf("muid") < 0 && (k += (k.indexOf("?") >= 0 ? "&" : "?") + "muid=" + y)
                        }
                    } catch {}
                    return this.app.context.transitThrownParams && this.app.context.transitThrownParams.forEach(y => {
                        let b = this.app.getQueryParameterByName(y);
                        b && b.length > 0 && (k = this.replaceUrlParam(k, y, b))
                    }), k
                }, this.app.getAntifraudQueryParameter = (e, i, o) => {
                    let p = this.app.antifraudBlock.getAntifraudParams(i, o);
                    if (p) {
                        let c = this.app.id;
                        return (e.indexOf("?") >= 0 ? "&" : "?") + "k=" + c + "f" + p
                    }
                    return ""
                }, this.app.getTranslation = e => {
                    let i = nt;
                    return e.search(/^\[\S*\]$/g) === 0 ? i[e] ? i[e] : "" : e
                }, this.app.getParentLink = e => {
                    for (; e && e.tagName !== "BODY";) {
                        if (e.tagName == "A") return e;
                        e = e.parentNode
                    }
                    return null
                }, this.app.getParentElWithClass = (e, i) => {
                    try {
                        for (; e && e.tagName !== "BODY";) {
                            if (e.classList.contains(i)) return e;
                            e = e.parentNode
                        }
                    } catch {
                        return null
                    }
                    return null
                }, this.app.findClosest = (e, i) => {
                    let o;
                    for (; e.parentNode;) {
                        o = e.parentNode.querySelectorAll(i);
                        for (let p = 0; p < o.length; p++)
                            if (e.isEqualNode(o[p])) return o[p];
                        e = e.parentNode
                    }
                    return null
                }, this.app.htmlToElement = e => {
                    let i = document.createElement("div");
                    return i.innerHTML = e, i.firstChild
                }, this.app.htmlToElements = e => {
                    let i = this.app.context.document.createElement("div");
                    return i.innerHTML = e, Array.prototype.slice.call(i.childNodes)
                }, this.app.prepareTeaserData = e => {
                    let i = {
                            source: this.app.htmlEntities(e[0]),
                            id: this.app.htmlEntities(e[1]),
                            title: typeof e[3] < "u" ? this.app.prepareTitle(e[3]) : "",
                            desc: typeof e[4] < "u" ? this.app.prepareDesc(e[4]) : "",
                            mirror: "marketgid",
                            key: e[6],
                            price: typeof e[7] < "u" ? this.app.htmlEntities(e[7]).replace(".00", "") : "",
                            priceold: typeof e[8] < "u" ? this.app.htmlEntities(e[8]).replace(".00", "") : "",
                            discount: "",
                            other: typeof e[10] < "u" ? e[10] : {},
                            hash: e[9],
                            isReplic: !1
                        },
                        o = (1 - parseFloat(i.price) / parseFloat(i.priceold)) * 100;
                    o <= 1 || o > 100 ? (i.priceold = "", i.discount = "") : i.discount = `${Math.floor(o)}%`, i.other.i = i.other.i ? this.app.htmlEntities(i.other.i) : this.app.blankImage;
                    let p = i.title.toLowerCase(),
                        c = i.desc.toLowerCase(),
                        w = ["\u043A\u043E\u043F\u0438\u044F", "\u043F\u043E\u0434\u0434\u0435\u043B\u043A\u0430", "\u0440\u0435\u043F\u043B\u0438\u043A\u0430", "\u043A\u0430\u043A \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B"],
                        k = ["\u041A\u043E\u043F\u0438\u044F. ", "\u0420\u0435\u043F\u043B\u0438\u043A\u0430. "];
                    if (e[5] == "1") {
                        i.isReplic = !0;
                        for (let h = 0; h < w.length; h++)
                            if (this.app.prepareTitle(p).indexOf(w[h]) > -1 || this.app.prepareDesc(c).indexOf(w[h]) > -1) {
                                i.isReplic = !1;
                                break
                            }
                    } else i.isReplic = !1;
                    return this.app.deviceType != "desktop" && (i.other.sdl = 0), e.other = i.other, this.app.teaserData[i.hash] = e, this.app.teaserData[i.hash].type = "teaser", this.app.teaserData[i.hash].id = i.id, this.app.teaserData[i.hash].source = i.source, this.app.teaserData[i.hash].img = i.other.i, this.app.teaserData[i.hash].link = typeof i.other.l < "u" ? i.other.l : "", this.app.teaserData[i.hash].mirror = i.mirror, this.app.teaserData[i.hash].coopType = typeof i.other.type < "u" ? i.other.type : null, this.app.teaserData[i.hash].clicktrackers = typeof i.other.clicktrackers < "u" ? i.other.clicktrackers : [], this.app.teaserData[i.hash].cdomain = i.other.cdomain || null, this.app.teaserData[i.hash].ccid = i.other.ccid || null, this.app.teaserData[i.hash].ch = i.other.ch || null, this.app.teaserData[i.hash].imp = typeof i.other.imp < "u" ? i.other.imp : [], this.app.teaserData[i.hash].impt = typeof i.other.impt < "u" ? i.other.impt : [], this.app.teaserData[i.hash].iteration = this.app.iteration, this.app.teaserData[i.hash].page = this.app.pagesServicerData.length, this.app.teaserData[i.hash].coopType == "i" && (this.app.context._mgIntExchangeNews[i.id] = 1), i
                }, this.app.getInternalIds = () => Object.keys(this.app.context._mgIntExchangeNews), this.app.tox64String = (e, i) => {
                    i = i || !1;
                    let o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        p = "",
                        c, w, k, h, y, b, d, I = 0;
                    for (; I < e.length;) c = e.charCodeAt(I++), w = e.charCodeAt(I++), k = e.charCodeAt(I++), h = c >> 2, y = (c & 3) << 4 | w >> 4, b = isNaN(w) ? 64 : (w & 15) << 2 | k >> 6, d = isNaN(k) ? 64 : k & 63, p += o.charAt(h) + o.charAt(y) + o.charAt(b) + o.charAt(d);
                    return i === !0 && (p = p.replace("+", "-").replace("/", "_").replace("=", "*")), p
                }, this.app.hangNiceLinkListener = (e, i) => {
                    if (this.app.loadedDefault) return;
                    let o = e.getAttribute("data-hash");
                    return this.app.teaserData[o]?.other?.sdl && (this.app.teaserData[o].other.sdl = 0), e[this.app.hrefAttr] = this.app.prepareHref(o, i, e), !0
                }, this.app.eventsHangNiceLinkListener = e => {
                    e || (e = this.app.context.event);
                    let i = e.target || e.srcElement;
                    i.tagName != "A" && (i = this.app.getParentLink(i), i === null) || !i.hasAttribute("data-hash") || this.app.hangNiceLinkListener(i, e)
                }, this.app.isHiddenElement = e => {
                    for (; e.tagName !== "BODY";) {
                        if (e.style.position !== "fixed" && e.offsetParent || e.style.visibility === "hidden" || e.style.display === "none") return !0;
                        e = e.parentNode
                    }
                    return !1
                }, this.app.htmlEntities = e => String(typeof e < "u" ? e : "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), this.app.random = (e, i) => Math.floor(e + Math.random() * (i - e + 1)), this.app.isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0, this.app.getExpectedCountNews = () => {
                    let e = 15,
                        i = JSON.parse("[]");
                    return this.app.utils.isMobile() && typeof i.mobile < "u" && (e = i.mobile), e
                }, this.app.isPassiveSupported = () => {
                    if (typeof this.app.passiveIsSupported < "u") return this.app.passiveIsSupported;
                    this.app.passiveIsSupported = !1;
                    try {
                        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function() {
                                this.app.passiveIsSupported = !0
                            }
                        }))
                    } catch {}
                    return this.app.passiveIsSupported
                }, this.app.getWidgetValue = (e, i) => {
                    let o = JSON.parse("[]");
                    return this.app.originalId !== this.app.id && typeof o[this.app.id]?.[e] < "u" ? o[this.app.id][e] : i
                }, this.app.isEnabledDoubleClick = () => typeof this.app.servicerData.dcb < "u"
            }
            fixWrongExternalImages() {
                let e = this.app.root.getElementsByClassName("mg-wrong-image");
                if (e.length)
                    for (let i = 0; i < e.length; i++) {
                        let o = e[i],
                            p = o.src;
                        o.src = this.app.blankImage, setTimeout(() => {
                            let c = o.getBoundingClientRect();
                            o.classList.add("mg-wrongImage" + i), o.src = p, this.app.stylesheetsBlock.add("wrongImage" + i, ".mg-wrongImage" + i + " { width: " + c.width + `px !important;
height: ` + c.height + `px !important;
object-fit: cover;
-o-object-fit: cover;
object-position: top;
-o-object-position: top;
 }`)
                        }, 50)
                    }
            }
            fixHeaderWidgetHeight() {
                let e = "M" + 872416 + "ScriptRootC" + 1435486,
                    i = this.app.context.document.getElementById(e);
                i && i.setAttribute("style", "min-height:auto !important;")
            }
            getClickZone() {
                let e = JSON.parse("[]");
                if (e.length === 0 || !e.top || !e.left || !e.right || !e.bottom) return "";
                let i = this.app.root.offsetHeight,
                    o = this.app.root.offsetWidth,
                    p = this.app.root.mouseX,
                    c = this.app.root.mouseY,
                    w = {
                        top: i / 100 * e.top,
                        left: o / 100 * e.left,
                        right: o - o / 100 * e.right,
                        bottom: i / 100 * e.bottom
                    },
                    k = c <= w.top ? 0 : c >= w.bottom ? 2 : 1,
                    h = p <= w.left ? 0 : p >= w.right ? 2 : 1;
                return [
                    [2, 3, 4],
                    [5, "", 6],
                    [7, 8, 9]
                ][k][h]
            }
            getParameterFromLink(e, i) {
                let o = e?.search;
                if (o === "") return null;
                let p = o.replace("?", "").split("&");
                for (let c = 0; c < p.length; c++)
                    if (p[c].split("=")[0] === i) return p[c];
                return null
            }
            replaceUrlParam(e, i, o) {
                let p = new RegExp("\\b(" + i + "=).*?(&|#|$)");
                return o === null ? e : e.search(p) >= 0 ? e.replace(p, "$1" + o + "$2") : (e = e.replace(/[?#]$/, ""), e + (e.indexOf("?") > 0 ? "&" : "?") + i + "=" + o)
            }
            renderLazyBanners(e) {
                this.app.root && this.app.teaserData[e].type === "banner" && this.app.renderBanners(!1, this.app.teaserData[e].iteration)
            }
            setAltToImages() {
                if (this.app.root) {
                    let e = this.app.root.getElementsByTagName("img");
                    for (let i = 0; i < e.length; i++) e[i].getAttribute("alt") === null && e[i].setAttribute("alt", "")
                }
            }
        }
    });
    var ze = {};
    ft(ze, {
        ContextBlock: () => Ft
    });
    var Ft, Ve = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Ft = class extends $ {
            constructor(e) {
                super(e), this.topmostWindowAccessible = null, this.name = "ContextBlock"
            }
            getTopmostWindowAccessible() {
                if (!this.topmostWindowAccessible) try {
                    for (let e = this.app.context; e.document && (this.topmostWindowAccessible = e, e != e.top); e = e.parent);
                } catch {}
                return this.topmostWindowAccessible
            }
            parseUrl(e) {
                let i = document.createElement("A");
                i.href = e;
                let o = i.search.replace(/^\?/, "").split("&"),
                    p = [];
                for (let w of o)
                    if (w !== "") {
                        let k = w.split("=");
                        p.push({
                            key: k[0],
                            value: typeof k[1] < "u" ? k[1] : ""
                        })
                    } let c = i.pathname;
                return c === "" && (c = "/"), c.charAt(0) !== "/" && (c = "/" + i.pathname), {
                    protocol: i.protocol,
                    host: i.host,
                    pathname: c,
                    search: i.search,
                    hash: i.hash,
                    parsedParams: p
                }
            }
            composeUrl(e) {
                return e.protocol + "//" + e.host + e.pathname + e.search + e.hash
            }
            stripAmpParts(e) {
                let i = e,
                    o = this.parseUrl(e),
                    p = "cdn.ampproject.org";
                if (o.host.indexOf(p) > 0 && o.host.indexOf(p) === o.host.length - p.length) {
                    let c = o.pathname.split("/");
                    if (typeof c[1] < "u" && (c[1] === "c" || c[1] === "v" || c[1] === "wp")) {
                        let w = !1;
                        typeof c[2] < "u" && c[2] === "s" && (w = !0), i = (w ? "https" : "http") + "://";
                        let k = 0;
                        for (let h of c) h !== "" && h !== "c" && h !== "v" && h !== "wp" && h !== "s" && (i += (k++ !== 0 ? "/" : "") + h);
                        i += o.search + o.hash
                    } else(typeof c[1] > "u" || c[1] === "") && (i = i.replace("." + p, "").replace("-", "."))
                }
                return i
            }
            contextUriSanitize(e) {
                if (e) {
                    e = this.stripAmpParts(e);
                    let i = this.parseUrl(e);
                    this.app.context._mgCanonicalUri = this.composeUrl(i)
                }
                return this.app.context._mgCanonicalUri
            }
            contextUriParse() {
                if (!this.app.context._mgCanonicalUri) {
                    this.app.context._mgCanonicalUri = "";
                    try {
                        let e = this.getTopmostWindowAccessible(),
                            i = "",
                            o = e.document.querySelector('meta[property="og:url"]');
                        if (o && o.getAttribute("content") && o.getAttribute("content").indexOf("http") !== -1) i = o.getAttribute("content");
                        else {
                            let p = e.document.querySelector("link[rel='canonical']");
                            p && p.getAttribute("href") && p.getAttribute("href").indexOf("http") !== -1 && (i = p.getAttribute("href"))
                        }
                        if (i === "") {
                            switch (this.app.iframePlacementType) {
                                case 0:
                                    i = this.app.pageUrl;
                                    break;
                                case 1:
                                    i = this.app.pageUrl;
                                    break;
                                case 2:
                                    i = this.app.refererUrl;
                                    break;
                                case 3:
                                    try {
                                        i = this.app.context.context.canonicalUrl
                                    } catch {}
                                    i || (i = this.app.pageUrl !== "" ? this.app.pageUrl : this.app.refererUrl);
                                    break
                            }
                            this.contextUriSanitize(i)
                        } else this.app.context._mgCanonicalUri = i
                    } catch {}
                }
                return this.app.context._mgCanonicalUri
            }
        }
    });
    var qe = {};
    ft(qe, {
        RequestBlock: () => jt
    });
    var jt, Fe = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        jt = class extends $ {
            pixel(e, i, o, p) {
                this._send(e, i, o, p, (c, w) => {
                    this._imgRequest(c, w)
                })
            }
            beacon(e, i, o, p) {
                this._send(e, i, o, p, (c, w, k) => {
                    if (typeof navigator.sendBeacon == "function") try {
                        navigator.sendBeacon(w), this.app.log(`Request beacon ${c} started`)
                    } catch (h) {
                        this.app.log(`Request beacon ${c} error: `, "error", h), this._imgRequest(c, w)
                    } else this._imgRequest(c, w)
                })
            }
            beaconBlob(e, i, o, p) {
                this._send(e, i, {}, p, (c, w, k) => {
                    if (typeof navigator.sendBeacon == "function") try {
                        navigator.sendBeacon(w, o), this.app.log(`Request beaconBlob ${c} started`)
                    } catch (h) {
                        this.app.log(`Request beaconBlob ${c} error: `, "error", h), this._xhrRequest(c, w, "POST", o)
                    } else this._xhrRequest(c, w, "POST", o)
                })
            }
            script(e, i, o, p) {
                this._send(e, i, o, p, (c, w) => {
                    let k = this.app.context.document.createElement("SCRIPT");
                    k.src = w, k.type = "text/javascript", k.async = !0, p.charset && (k.charset = p.charset), p.onerror && (k.onerror = p.onerror), p.dest ? (p.dest.appendChild(k), this.app.log(`Request script ${c} started`)) : this.app.log(`Request script ${c} failed - options.dest is undefined!`, "warn")
                })
            }
            _prepareUrl(e, i) {
                let o = this.app.consentsBlock.getConsentData();
                o && e.indexOf("/vz") == -1 && Object.keys(o).forEach(c => {
                    let w = o[c];
                    e.indexOf(c) === -1 && (i[c] = i[c] || `${c}=${w}`)
                });
                let p = [];
                for (let c of Object.keys(i))(i[c][0] === "?" || i[c][0] === "&") && (i[c] = i[c].substring(1)), p.push(i[c]);
                return p.length > 0 && (e.slice(-1) !== "?" && e.slice(-1) !== "&" && (e += e.indexOf("?") === -1 ? "?" : "&"), e += p.join("&")), e
            }
            _send(e, i, o, p, c) {
                if (p.unique) {
                    if (this.app.context._mgRequests = this.app.context._mgRequests || {}, this.app.context._mgRequests[e]) {
                        this.app.log(`Request ${e} stopped - already defined on page`, "warn");
                        return
                    }
                    this.app.context._mgRequests[e] = !0
                }
                i = this._prepareUrl(i, o), c(e, i, p)
            }
            _imgRequest(e, i) {
                let o = this.app.context.document.createElement("IMG");
                o.src = i, o.onerror = () => this.app.log(`Request image ${e} load error`, "error"), this.app.log(`Request image ${e} started`)
            }
            _xhrRequest(e, i, o, p) {
                let c = new XMLHttpRequest;
                c.open(o, i, !0), c.onerror = () => this.app.log(`Request XHR ${e} load error`), c.send(p), this.app.log(`Request image ${e} started`)
            }
        }
    });
    var je = {};
    ft(je, {
        CookieBlock: () => $t
    });
    var $t, $e = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        $t = class extends $ {
            constructor(e) {
                super(e), this.app = e, this.cookieStorage = {}, this.sharedCookieStorage = {}, this.storageName = "MgidStorage" + (this.app.context["MarketGidPageOffset"] ? this.app.context["MarketGidPageOffset"] : "")
            }
            getCookieValue() {
                {
                    let e = this.app.context.document.cookie.match(new RegExp("(?:^|; )" + this.storageName + "=([^;]*)")),
                        i = {};
                    if (e) try {
                        i = JSON.parse(decodeURIComponent(e[1]))
                    } catch {}
                    return i
                }
            }
            getCookie() {
                let e = this.getCookieValue();
                typeof e["C" + 1435486] < "u" ? this.cookieStorage = e["C" + 1435486] : this.cookieStorage = {}, typeof e[0] < "u" ? this.sharedCookieStorage = e[0] : this.sharedCookieStorage = {}
            }
            setCookie() {
                {
                    let e = this.getCookieValue();
                    e["C" + 1435486] = this.cookieStorage, e[0] = this.sharedCookieStorage;
                    let i = encodeURIComponent(JSON.stringify(e));
                    this.app.context.document.cookie = this.storageName + "=" + i + ";path=/"
                }
            }
        }
    });
    var Ue = {};
    ft(Ue, {
        StylesheetsBlock: () => Ut
    });
    var Ut, Xe = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Ut = class extends $ {
            constructor(e) {
                super(e), this.name = "StylesheetsBlock", this._isIE = typeof Proxy > "u", this._stylesDom = {}, this._isIE || (this._stylesDom = new Proxy(this._stylesDom, {
                    set: (i, o, p) => {
                        let c = p.container,
                            w = p.style;
                        return i[o] && delete this._stylesDom[o], this._inject(w, o, c), i[o] = p, !0
                    },
                    has: (i, o) => this.app.root.querySelector("style#" + o) === null && typeof i[o] < "u" ? !1 : typeof i[o] < "u",
                    deleteProperty: (i, o) => (this._removeFromDom(o), delete i[o], !0)
                }))
            }
            add(e, i, o = null) {
                e += "_" + this.app.uniqId, !(!this._isIE && typeof o > "u" && e in this._stylesDom) && (i = i.replace(/((@media|@supports not) \([^(]*\) {)/g, "$1}"), i = i.replace(/((?:^|}|,|;)\W*)((?:\w+)?\.(?:mc|mg|row)[\-\w]+)/g, "$1" + this.app.getMainCssSelector() + " $2"), i = i.replace(/(((@media|@supports not) \([^(]*\) \{)\})/g, "$2"), i = i.replace(/video-cdn\.(.+)\/mgPlayer/g, this.app.currentSubnetDomain), i !== "" && (this._isIE ? (this._removeFromDom(e), this._inject(i, e, o)) : this._stylesDom[e] = {
                    style: i,
                    container: o
                }))
            }
            remove(e) {
                e += "_" + this.app.uniqId, !this._isIE && e in this._stylesDom ? delete this._stylesDom[e] : this._removeFromDom(e)
            }
            _removeFromDom(e) {
                let i = this.app.root.querySelector("#" + e);
                i && i.parentNode.removeChild(i)
            }
            _inject(e, i, o) {
                if (o) {
                    let p = o;
                    if (p.className = "MarketGidC" + 1435486, p.styleSheet) p.styleSheet.cssText = e;
                    else {
                        for (; p.firstChild;) p.removeChild(p.firstChild);
                        p.appendChild(this.app.context.document.createTextNode(e))
                    }
                } else {
                    let p = this.app.context.document.createElement("style");
                    p.setAttribute("id", i), p.className = "MarketGidC" + 1435486, p.type = "text/css", (typeof this.app.realRoot < "u" ? this.app.realRoot : this.app.root).appendChild(p), p.styleSheet ? p.styleSheet.cssText = e : p.appendChild(this.app.context.document.createTextNode(e))
                }
            }
        }
    });
    var Ye = {};
    ft(Ye, {
        SendDimensionsBlock: () => Xt
    });
    var Xt, Je = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Xt = class extends $ {
            constructor(e) {
                super(e), this.childMarginFixPixels = 1, this.loremData = {
                    title: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
                    domain: "Lorem ipsum dolor",
                    description: "Lorem ipsum dolor sit amet Lorem ipsum"
                }, this.name = "SendDimensionsBlock", this.app.precalcRect = {}, this.isAdblock = !1, this.setAppFunctions()
            }
            setAppFunctions() {
                this.app.calcPreRenderingBlock = () => {
                    let e = this.app.root.getElementsByClassName("mgline");
                    if (this.isAdblock)
                        if (this.app.utils.isMobile()) {
                            for (let u = e.length; u > 1; u--) {
                                let T = e[u - 1];
                                if (this.app.root.getBoundingClientRect().height > this.app.context.screen.height && T && T.parentNode) T.parentNode.removeChild(T);
                                else break
                            }
                            e = this.app.root.getElementsByClassName("mgline"), this.app.requestParams.limitads = "limitads=" + e.length
                        } else {
                            let u = "",
                                T = 0;
                            for (let E in this.app.childWidgetsData)
                                if (this.app.childWidgetsData.hasOwnProperty(E) && this.app.childWidgetsData[E].isAdblockChild) {
                                    u = this.app.childWidgetsData[E].childSubtype;
                                    break
                                } u === "under-article-widget-adblock" || u === "in-article-adblock" ? T = 25 : u === "header-widget-adblock" && (T = 15), u && T && u.indexOf("adblock") !== -1 && this.addHook("afterLoadNewsHooks", () => {
                                this.changeWidgetWidth(this.app.root.querySelector(".mgbox"), T)
                            })
                        } typeof this.app.iframeSizeChangerBlock?.initIframeSizeChange == "function" && this.app.iframeSizeChangerBlock.initIframeSizeChange();
                    let i = this.app.root.getBoundingClientRect();
                    this.app.precalcRect.width = Math.ceil(parseFloat(i.width ? i.width : i.right - i.left)), this.app.precalcRect.height = Math.ceil(parseFloat(i.height ? i.height : i.bottom - i.top)) - this.childMarginFixPixels, this.app.precalcRect.top = i.top, this.app.precalcRect.bottom = i.bottom, this.app.requestParams.w = "w=" + this.app.precalcRect.width, this.app.requestParams.h = "h=" + this.app.precalcRect.height;
                    let o = 0,
                        p = "7".split(",").map(Number) || [],
                        c = this.app.templateText.indexOf("$banner") !== -1 && !this.isAdblock,
                        w = 300,
                        k = 250,
                        h = 220,
                        y = this.app.utils.isMobile() ? 280 : k,
                        b = 400;
                    for (let u = 0; u < e.length; u++) {
                        let T = u + 1,
                            E = e[u].getBoundingClientRect(),
                            W = Math.ceil(e[u]?.clientHeight || parseFloat(E.height ? E.height : E.bottom - E.top)),
                            S = Math.ceil(e[u]?.clientWidth || parseFloat(E.width ? E.width : E.right - E.left)),
                            C = e[u].querySelector("img.mcimg"),
                            R = p.indexOf(T) !== -1;
                        if (typeof C < "u") {
                            let et = C.getBoundingClientRect();
                            if (et.height === 0 || et.width === 0) {
                                let mt = "#preRenderingBlock" + 1435486 + "_" + this.app.uniqId;
                                this.app.realRoot.querySelector(mt) !== null && (this.app.realRoot.querySelector(mt).style.clear = "both", et = C.getBoundingClientRect())
                            }(et.height === 0 || et.width === 0) && (this.app.requestParams.wrongImageSize = "wrongImageSize=1"), this.app.preRenderImageSizes[T - 1] = {
                                height: et.height,
                                width: et.width
                            }
                        }
                        if ((c || R) && S >= w && W >= h && W < y) {
                            let et = !1;
                            e[T - 1].innerHTML = `<div style="min-width: ${w}px; min-height: ${y}px;"></div>`;
                            let mt = e[T - 1].getBoundingClientRect(),
                                wt = this.app.root.getBoundingClientRect();
                            if (mt.width >= w && mt.height >= y) {
                                et = !0;
                                let lt = this.app.root.parentNode;
                                for (; lt && typeof lt.tagName < "u" && lt.tagName !== "BODY";) {
                                    let ht = lt.getBoundingClientRect();
                                    if (ht.width < wt.width || ht.height < wt.height) {
                                        et = !1;
                                        break
                                    } else lt = lt.parentNode
                                }
                            }
                            et && (W = y)
                        }
                        this.app.preRenderTeaserSizes[T - 1] = {
                            height: W,
                            width: S,
                            position: T,
                            top: Math.floor(E.top)
                        }, R && (this.app.requestParams["maxw_" + T] = "maxw_" + T + "=" + S, this.app.requestParams["maxh_" + T] = "maxh_" + T + "=" + W), typeof this.app.prepTop < "u" && this.app.prepTop < E.top && o === 0 && (o = u), this.app.prepTop = E.top
                    }
                    if (c) {
                        let u = Object.keys(this.app.preRenderTeaserSizes).map(C => this.app.preRenderTeaserSizes[C]),
                            T = u.filter(C => C.height >= k && C.width >= w && C.width <= b);
                        if (u.every(C => C.height >= k && C.width >= w) && (this.app.requestParams.ident_p = "ident_p=true"), T.length) {
                            let C = T[0];
                            this.app.requestParams.sz1 = `sz1=${C.width}x${C.height}`, this.app.requestParams.szp1 = `szp1=${C.position}`
                        }
                        let E = u.reduce((C, R) => {
                            let et = `${R.width}x${R.height}`,
                                mt = C[et] || [];
                            return {
                                ...C,
                                [et]: [...mt, R.position]
                            }
                        }, {});
                        this.app.requestParams.sz = `sz=${Object.keys(E).join(";")}`, this.app.requestParams.szp = `szp=${Object.keys(E).map(C=>E[C]).join(";")}`;
                        let W = u[0].top,
                            S = u.reduce((C, R) => {
                                let et = R.top + (W < 0 ? -W : 0),
                                    mt = C[et] || [];
                                return {
                                    ...C,
                                    [et]: [...mt, R.position]
                                }
                            }, {});
                        this.app.requestParams.szl = `szl=${Object.keys(S).map(C=>S[C]).join(";")}`
                    }
                    o == 0 && (o = e.length), this.app.requestParams.cols = "cols=" + o, this.app.root = this.app.realRoot;
                    let d = "preRenderingBlock" + 1435486 + "_" + this.app.uniqId,
                        I = this.app.root;
                    this.app.root.parentNode.id === d && this.app.root.parentNode.parentNode != null && (I = this.app.root.parentNode.parentNode), I.querySelector("#" + d) !== null && I.removeChild(I.querySelector("#" + d)), this.app.root.style.overflow = "visible", this.app.root.style.visibility = "visible", this.app.root.style.width = this.app.precalcRect.width + "px", this.app.root.style.height = this.app.precalcRect.height + "px", this.addHook("afterLoadNewsHooks", () => {
                        this.app.root.style.width = "auto", this.app.root.style.height = "auto"
                    }), this.app.loadedType = "", this.app.currentSubnet = "", this.app.countLoadBlocks = this.app.countLoadBlocksContainer, this.app.template = "", this.app.iteration = 1
                }, this.app.preparePrerenderData = e => {
                    let i = this.app.context.document.createElement("div"),
                        o = this.app.context.document.createElement("div"),
                        p = e || this.app.getExpectedCountNews(),
                        c = [];
                    i.id = "preRenderingBlock" + 1435486 + "_" + this.app.uniqId, i.style.visibility = "hidden", o.id = this.app.root.id, o.style.padding = `${this.childMarginFixPixels}px 0 0 0`, o.style.margin = `-${this.childMarginFixPixels}px auto 0 auto`, i.appendChild(o), this.app.loadedType = "goods", this.app.currentSubnet = "0", this.app.realRoot = this.app.root, this.app.countLoadBlocksContainer = this.app.countLoadBlocks, this.app.root.appendChild(i), this.app.root = o;
                    for (let w = 1; w <= p; w++) c.push([this.loremData.domain, w, "", this.loremData.title, this.loremData.description, "", "", "", "", "", {
                        i: this.app.blankImage
                    }]);
                    return c
                }
            }
            changeWidgetWidth(e, i) {
                let p = e.offsetWidth,
                    c = e.offsetHeight,
                    w = p * c,
                    k = this.app.context.innerWidth * this.app.context.innerHeight;
                if (w / k * 100 > i && p > 500) {
                    let y = k * i / 100,
                        b = w - y,
                        d = p - p * (b / w / 2),
                        I = d >= 500 ? Math.floor(d) : 500;
                    e.style.maxWidth = I + "px"
                }
            }
        }
    });
    var Ze = {};
    ft(Ze, {
        VersionControlBlock: () => Yt
    });
    var Yt, Ke = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Yt = class extends $ {
            constructor(e) {
                super(e), this.initConsoleInfo()
            }
            initConsoleInfo() {}
        }
    });
    var Qe = {};
    ft(Qe, {
        InternalExchangeBlock: () => Jt
    });
    var Jt, ti = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Jt = class extends $ {
            constructor(e) {
                super(e), this.name = "InternalExchangeBlock", this.addHook("afterLoadNewsHooks", this.initIntExchangeLabels)
            }
            initIntExchangeLabels() {
                if (this.app.enabledCooperationTypes.indexOf("int_exchange") === -1 && [3, 2].indexOf(this.app.currentSubnet) === -1) return;
                let o = this.getComments(this.app.root),
                    p = this.app.root.getElementsByClassName("type-w");
                if (!(this.app.currentSubnet === 3 && this.app.enabledCooperationTypes.indexOf("wages") !== -1 && this.app.enabledCooperationTypes.length === 1 && p.length === o.length))
                    for (let c = 0; c < o.length; c++) {
                        let w = o[c],
                            k = this.app.findClosest(w, ".mgline");
                        if (!k || k.className.indexOf("type-w") === -1) continue;
                        let h = this.app.context.document.createElement("IMG");
                        if (h.setAttribute("height", 20), h.setAttribute("width", 20), h.setAttribute("alt", ""), w.data === "intExchangeWagesImagePlace") {
                            h.className = "mcimgad", h.src = this.app.webProtocol + "//cdn.mgid.com/images/mgid/int_exchange_wages_ad.svg";
                            let d = k.getElementsByClassName("criteo-informer");
                            d.length === 1 && (d[0].style.top = "2px", d[0].style.right = "70px")
                        }
                        let y = k.querySelector("a"),
                            b = y["data-hash"] || y.getAttribute("data-hash");
                        b && this.app.teaserData[b] && !!this.app.teaserData[b].source && w.data === "intExhangeWagesSourcePlace" && (h.className = "mcimgsrc", h.src = this.app.webProtocol + "//cdn.mgid.com/images/mgid/int_exchange_wages_src.svg"), h.src && w.parentNode.replaceChild(h, w)
                    }
            }
            getComments(e) {
                let i = [],
                    o = [e];
                for (; o.length > 0;) {
                    let p = o.pop();
                    for (let c = 0; c < p.childNodes.length; c++) {
                        let w = p.childNodes[c];
                        w.nodeType === Node.COMMENT_NODE ? i.push(w) : o.push(w)
                    }
                }
                return i
            }
        }
    });
    var ei = {};
    ft(ei, {
        InternalExchangeLoggerBlock: () => Zt
    });
    var Zt, ii = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Zt = class extends $ {
            constructor(e) {
                super(e), this.name = "InternalExchangeLoggerBlock", this.app.internalExchangeLoggerHandler = this.clickHandler.bind(this), this.addHook("afterLoadNewsHooks", this.init)
            }
            init() {
                this.app.addClickHandler(this.app.clickHandlerList.internalExchangeLogger.handler, this.app.clickHandlerList.internalExchangeLogger.priority)
            }
            clickHandler(e) {
                let i = e.getAttribute("data-hash");
                if (this.app.teaserData[i] && this.app.teaserData[i].coopType == "i") {
                    let o = {};
                    o.cid = `cid=${this.app.id}`, o.tid = `tid=${this.app.teaserData[i].id}`, o.h = `h=${i}`, typeof this.app.servicerData.isBot < "u" && (o.bot = `bot=${this.app.servicerData.isBot}`), typeof this.app.servicerData.tt < "u" && (o.tt = `tt=${this.app.servicerData.tt}`), typeof this.app.servicerData.ts < "u" && (o.ts = `ts=${this.app.servicerData.ts}`), typeof this.app.servicerData.psid < "u" && (o.psid = `psid=${this.app.servicerData.psid}`), typeof this.app.servicerData.dt < "u" && (o.dt = `dt=${this.app.servicerData.dt}`);
                    let p = e.parentNode.tagName,
                        c = "." + this.app.extractClass(e.parentNode);
                    o.ce = `ce=${p}${c}`, this.app.request.pixel("internalExchangeLogger", this.app.webProtocol + "//c.mgid.com/clie", o, {})
                }
                return !0
            }
        }
    });
    var si = {};
    ft(si, {
        AdvertLinkBlock: () => Kt
    });
    var Kt, ai = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Kt = class extends $ {
            constructor(e) {
                super(e), this.name = "AdvertLinkBlock", this.addHook("beforeLoadNewsHooks", this.refreshAdvertLink), this.addHook("afterLoadNewsHooks", this.initAdvertPopup)
            }
            parseAdvertLink(e) {
                let i = "<!--advertPrefix-->",
                    o = e.indexOf(i) > e.length / 2;
                return o && this.removeElements(this.app.root.getElementsByClassName("mg_addad" + this.app.id)), (o || this.app.countLoadBlocks === 0) && (e.indexOf(i) >= 0 ? e = e.replace(i, this.app.tickerPrefix) : e = this.app.tickerPrefix + e), e
            }
            initAdvertPopup() {
                if (this.app.context.top !== this.app.context.self || this.app.widgetConstructorData.type === "banner" || this.app.widgetConstructorData.type === "exit-pop-up" || ["tablet", "desktop"].indexOf(this.app.deviceType) === -1 || typeof this.app.context._mgDisableAdvertPopup < "u" || "stringConstructorBlock" + 1435486 == "function") return;
                let e = this.app.root.querySelector(".mg_addad" + this.app.id);
                e && e.addEventListener("click", i => {
                    this.showAdvertPopup(i)
                })
            }
            showAdvertPopup(e) {
                let i = this.app.findClosest(e.target, "[data-advert-url]");
                if (!i) return null;
                e.preventDefault();
                let o = (typeof this.app.realRoot < "u" ? this.app.realRoot : this.app.root).parentNode,
                    p = o.querySelector("._mgAdvertPopupC" + 1435486),
                    c = o.querySelector("._mgPopupInner");
                var w = function(k, h, y) {
                    if (y <= 0) return;
                    let d = (h - k.scrollTop) / y * 10;
                    setTimeout(function() {
                        k.scrollTop = k.scrollTop + d, k.scrollTop !== h && w(k, h, y - 10)
                    }, 10)
                };
                if (!p) {
                    let k = `
<style>
    ._mgAdvertPopupC1435486 {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        font-family: "PTSans", Arial, sans-serif;
        font-size: 16px;
        color: #696969;
        line-height: 1.3;
        z-index: 999;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    ._mgAdvertPopupC1435486 iframe {
        width: 100%;
        height: 377px;
    }
    ._mgAdvertPopupC1435486 ._mgPopupShadow {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.4;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
        z-index: 1;
    }
    ._mgAdvertPopupC1435486 ._mgPopupInner {
        position: relative;
        top: 50%;
        margin-left: -375px;
        left: 50%;
        padding: 36px;
        width: 750px;
        background-color: #f8f8f8;
        z-index: 2;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    ._mgAdvertPopupC1435486 ._mgPopupInner.fixPop {
        position: absolute!important;
        top: 30px!important;
        margin-top: 0!important;
    }
    ._mgAdvertPopupC1435486 ._mgClosePopup {
        position: absolute;
        overflow: hidden;
        top: 5px;
        right: 5px;
        height: 21px;
        width: 21px;
        text-indent: -9999px;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAgMAAADUwp+1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVmZmZmZmb///+E1CFqAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAlSURBVAjXY3BgYGEQAEIWBgcGRkYGBgYXIBaA0CA+SBwkD1QHACp2Ae2BHO8IAAAAAElFTkSuQmCC') no-repeat center center;
        background-color: transparent;
    }
    ._mgAdvertPopupC1435486 ._mgClosePopup:hover {
        background-color: #dfdfdf;
    }
</style>

<div class="_mgAdvertPopupC1435486">
    <div class="_mgPopupShadow"></div>
    <div class="_mgPopupInner">
        <a href="#" class="_mgClosePopup" title="Close"></a>
        <iframe frameborder="0"></iframe>
    </div>
</div>
`,
                        h = this.app.htmlToElements(k);
                    for (let I = 0; I < h.length; I++) o.appendChild(h[I]);
                    if (p = o.querySelector("._mgAdvertPopupC" + 1435486), !p) return !1;
                    c = p.querySelector("._mgPopupInner");
                    let y = p.querySelector("._mgPopupShadow");
                    c.style.marginTop = -(c.clientHeight / 2) + "px", y.addEventListener("click", I => {
                        this.app.findClosest(I.target, "._mgPopupInner") == null && p.setAttribute("style", "display: none")
                    });
                    let b = p.querySelector("._mgClosePopup");
                    b && b.addEventListener("click", function(I) {
                        I.preventDefault(), p.setAttribute("style", "display: none")
                    });
                    let d = p.querySelector("iframe");
                    d.setAttribute("src", i.getAttribute("data-advert-url")), this.app.addEvent(this.app.context, "message", I => {
                        let u = I.message ? "message" : "data",
                            T = JSON.parse(I[u]);
                        if (typeof T.target > "u" || T.target !== "correct-popup-height") return !0;
                        d.style.height = T.height + "px", T.safariIPad && (T.keyboard ? (w(this.app.context.document.body, 0, 500), c.classList.add("fixPop")) : c.classList.remove("fixPop")), c.style.marginTop = -(c.clientHeight / 2) + "px"
                    }, !1)
                }
                p.setAttribute("style", "display: block"), c.className.indexOf("fixPop") >= 0 && w(this.app.context.document.body, 0, 500)
            }
            refreshAdvertLink() {
                let e = this.getAdvertLinkValue(),
                    i = !1,
                    o = !0;
                if (e || i && o) try {
                    let p = this.getAdLinkBlock().replace(/%id/g, this.app.id),
                        c = "";
                    i ? c = this.app.getTranslation("[WIDGET_TITLE_PROMOTED_CONTENT]") : c = this.app.getTranslation("[WIDGET_TITLE_PROMOTED_CONTENT]");
                    let w = navigator.language.substr(0, 2),
                        k = rt.indexOf(w) !== -1 ? w : "";
                    p = p.replace("%WIDGET_TITLE%", c), p = p.replace("%lang/", k === "" ? "" : k + "/"), p = p.replace(/\((\'|\")?\/\//g, "($1" + this.app.webProtocol + "//"), p = p.replace('src="//', 'src="' + this.app.webProtocol + "//"), p = p.replace('href="//', 'href="' + this.app.webProtocol + "//");
                    let h = "";
                    if (h === "") {
                        h = this.app.subnetMirrorsUtm;
                        let b = this.app.context.document.location.hostname;
                        if (this.app.context !== this.app.context.top) {
                            let d = this.app.context.document.referrer.match(/:\/\/(.[^/]+)/);
                            d !== null && (b = d[1])
                        }
                        h = h.replace("{domain}", b)
                    }
                    this.app.tickerPrefix = p.replace(/%utm/, h);
                    let y = document.createElement("div");
                    if (i && o) y.innerHTML = this.app.tickerPrefix;
                    else {
                        if (e === 1) return;
                        y.innerHTML = this.app.tickerPrefix, e === 2 && this.removeElements(y.getElementsByClassName("mg_addad" + this.app.id)), e === 3 && (this.removeElements(y.getElementsByClassName("mghead")), this.removeElements(y.getElementsByClassName("mghead" + this.app.id)))
                    }
                    this.app.tickerPrefix = y.innerHTML
                } catch {} else this.app.tickerPrefix = ""
            }
            getAdvertLinkValue() {
                return parseInt(1)
            }
            removeElements(e) {
                for (let i = 0; i < e.length; i++) e[i].parentNode.removeChild(e[i])
            }
            getAdLinkBlock() {
                let e = "smart",
                    i = "smart-plus",
                    o = "marketgid",
                    p = at;
                typeof p < "u" && typeof p[e] < "u" && (typeof p[e]["*"] < "u" && (o = p[e]["*"]), typeof p[e][i] < "u" && (o = p[e][i]));
                let c = st;
                return typeof c[o] > "u" && (o = "marketgid"), c[o]
            }
        }
    });
    var oi = {};
    ft(oi, {
        ColorBlock: () => Qt
    });
    var Qt, ni = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Qt = class extends $ {
            constructor(e) {
                super(e), this.name = "ColorBlock"
            }
            colorAverage(e) {
                return new Promise(i => {
                    e.complete ? i(this._getColor(e)) : e.onload = () => {
                        i(this._getColor(e))
                    }
                })
            }
            _getColor(e) {
                let i = {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    o = 4,
                    p = document.createElement("canvas");
                p.width = o, p.height = o;
                let c = p.getContext("2d");
                c.drawImage(e, 0, 0, o, o);
                try {
                    let w = c.getImageData(0, 0, o, o),
                        k = -4,
                        h = 0;
                    for (;
                        (k += 1 * 4) < w.data.length;) ++h, i.r += w.data[k], i.g += w.data[k + 1], i.b += w.data[k + 2];
                    i.r = Math.floor(i.r / h), i.g = Math.floor(i.g / h), i.b = Math.floor(i.b / h);
                    let y = Math.max(i.r, i.g, i.b),
                        b = Math.min(i.r, i.g, i.b);
                    if ((y / 255 + b / 255) / 2 > .8) {
                        let d = this._rgbToHsl(i.r, i.g, i.b);
                        i = this._hslToRgb(d.h, d.s, .8)
                    }
                } catch (w) {
                    this.app.log(`${this.name} error: `, "error", w)
                }
                return i
            }
            _rgbToHsl(e, i, o) {
                e /= 255, i /= 255, o /= 255;
                let p = Math.max(e, i, o),
                    c = Math.min(e, i, o),
                    w, k, h = (p + c) / 2;
                if (p == c) w = k = 0;
                else {
                    let y = p - c;
                    switch (k = h > .5 ? y / (2 - p - c) : y / (p + c), p) {
                        case e:
                            w = (i - o) / y + (i < o ? 6 : 0);
                            break;
                        case i:
                            w = (o - e) / y + 2;
                            break;
                        case o:
                            w = (e - i) / y + 4;
                            break
                    }
                    w /= 6
                }
                return {
                    h: w,
                    s: k,
                    l: h
                }
            }
            _hslToRgb(e, i, o) {
                let p, c, w;
                if (i == 0) p = c = w = o;
                else {
                    let k = function(b, d, I) {
                            return I < 0 && (I += 1), I > 1 && (I -= 1), I < .16666666666666666 ? b + (d - b) * 6 * I : I < .5 ? d : I < .6666666666666666 ? b + (d - b) * (.6666666666666666 - I) * 6 : b
                        },
                        h = o < .5 ? o * (1 + i) : o + i - o * i,
                        y = 2 * o - h;
                    p = k(y, h, e + 1 / 3), c = k(y, h, e), w = k(y, h, e - 1 / 3)
                }
                return {
                    r: Math.floor(p * 255),
                    g: Math.floor(c * 255),
                    b: Math.floor(w * 255)
                }
            }
        }
    });
    var ri = {};
    ft(ri, {
        GradientBlock: () => te
    });
    var te, pi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        te = class extends $ {
            constructor(e) {
                super(e), this.name = "GradientBlock", this.addHook("afterLoadNewsHooks", this._gradientRendering)
            }
            _createGradient(e, i, o, p, c, w, k) {
                (this.app.context.matchMedia("(max-width: 480px)").matches || this.app.deviceType === "mobile") && (c = w);
                let h = .299 * k.r + .587 * k.g + .114 * k.b > 186 ? "#000" : "#fff",
                    y = "linear-gradient(" + c + "transparent, rgba(" + k.r + "," + k.g + "," + k.b + ", 0.25) 15%,rgba(" + k.r + "," + k.g + "," + k.b + ", 0.85) 30%,rgb(" + k.r + "," + k.g + "," + k.b + ") 45%)";
                e.style.background = "rgb(" + k.r + "," + k.g + "," + k.b + ")", i.style.background = y, o.style.color = h, Object.keys(p).forEach(function(b) {
                    let d = p[b];
                    d.firstElementChild.style.color = h
                }), this._setFontSize(o)
            }
            _defaultGradient(e, i, o, p, c, w) {
                (this.app.context.matchMedia("(max-width: 480px)").matches || this.app.deviceType === "mobile") && (p = c);
                let k = "";
                w === "" ? k = "linear-gradient(" + p + "transparent,rgba(0,0,0, 0.25) 15%,rgba(0,0,0, 0.85) 30%,rgb(0,0,0) 45%)" : k = "linear-gradient(" + p + "transparent,rgba(" + w + ", 0.25) 15%,rgba(" + w + ", 0.85) 30%,rgb(" + w + ") 45%)", e.style.background = k, i.style.color = "#fff", Object.keys(o).forEach(function(h) {
                    let y = o[h];
                    y.firstElementChild.style.color = "#fff"
                }), this._setFontSize(i)
            }
            _setFontSize(e) {
                let i = this.app.autoSizeTitle - Math.round(e.clientHeight / this.app.autoSizeTitle);
                e.style.fontSize = i + "px", e.style.lineHeight = i + "px"
            }
            _gradientRendering() {
                if (!this.app.templateContent) return;
                let e = this.app.templateContent.querySelectorAll("[class*=mgline-blur]");
                if (!e.length) return;
                let i = p => {
                        let c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(p);
                        return c ? parseInt(c[1], 16) + "," + parseInt(c[2], 16) + "," + parseInt(c[3], 16) : ""
                    },
                    o = {
                        r: 159,
                        g: 138,
                        b: 126
                    };
                for (let p = 0; p < e.length; p++) {
                    let c = "",
                        w = "",
                        k = "",
                        h = /\bmgline-[^\s]*\b/.exec(e[p].classList.value),
                        y = /\bmgline-[^\s]*\b-mob/.exec(e[p].classList.value);
                    h && (k = h[0].split("-").pop(), k = k === "blur" ? "bottom" : k, c = "to " + k + ","), y && (k = y[0].split("-")[2], w = "to " + k + ",");
                    let b = e[p],
                        d = e[p].getElementsByClassName("text-elements")[0];
                    if (!e[p].getElementsByClassName("mctitle")[0]) continue;
                    let I = e[p].getElementsByClassName("mctitle")[0].getElementsByTagName("a")[0],
                        u = e[p].getElementsByClassName("mcdomain"),
                        T = e[p].querySelector("img.mcimg"),
                        E = e[p].querySelector("video.mcvideo"),
                        W = "";
                    W !== "" && (W = i(W)), W === "" ? T ? this.app.colorBlock.colorAverage(T).then(S => {
                        this._createGradient(b, d, I, u, c, w, S)
                    }) : E && this._createGradient(b, d, I, u, c, w, o) : this._defaultGradient(d, I, u, c, w, W)
                }
            }
        }
    });
    var ci = {};
    ft(ci, {
        IframeSizeChangerBlock: () => ee
    });
    var ee, hi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        ee = class extends $ {
            constructor(e) {
                super(e), this.name = "IframeSizeChangerBlock", this.addHook("afterLoadNewsHooks", this.initIframeSizeChange)
            }
            initIframeSizeChange() {
                let e = null;
                try {
                    if (e || (e = this.app.context.parent.document.getElementById(this.app.context.name)), e) try {
                        let i = this.app.context.parent.document.getElementById(e.name + "__container__").parentNode;
                        i.style.width = "initial", i.style.height = "initial"
                    } catch {}
                } catch {
                    this.app.log("SafeFrame. Checking for support..."), this.isSafeFrameSupported() && this.isSafeFrameAllowedPush() ? (this.app.log("SafeFrame. Supported"), this.safeFrameRegister(), this.safeFrameExpand()) : this.app.log("SafeFrame. Unsupported!");
                    return
                }
                if (e) {
                    let i = "0".split("*");
                    typeof i[0] < "u" && (e.width = i[0] + "px"), typeof i[1] < "u" && (e.height = i[1] + "px")
                }
            }
            isSafeFrameSupported() {
                return typeof this.app.context.$sf < "u"
            }
            isSafeFrameAllowedPush() {
                return this.app.context.$sf.ext.supports()["exp-push"]
            }
            safeFrameExpand() {
                this.app.log("SafeFrame. Expanding...");
                let e = this.app.context.$sf.ext.geom().exp,
                    i = {
                        push: !0,
                        t: e.t,
                        l: e.l,
                        r: e.r,
                        b: e.b
                    };
                this.app.context.$sf.ext.expand(i)
            }
            safeFrameRegister() {
                this.app.log("SafeFrame. Register..."), this.app.context.$sf.ext.register(300, 250, (e, i) => {
                    this.app.log("SafeFrame. " + e + "; " + JSON.stringify(i))
                })
            }
        }
    });
    var li = {};
    ft(li, {
        AdChoiceBlock: () => ie
    });
    var ie, di = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        ie = class extends $ {
            constructor(e) {
                super(e), this.name = "AdChoiceBlock", this.addHook("beforeLoadNewsHooks", this._initAdChoiceStyles), this.addHook("afterLoadNewsHooks", () => {
                    this._addAdChoiceIcons()
                })
            }
            _addAdChoiceIcons() {
                let e = this.app.root.getElementsByClassName("mgline");
                for (let i = 0; i < e.length; i++)(o => {
                    let p = o.getAttribute("data-i");
                    if (!p || this.app.teaserData[p] && !(this.app.teaserData[p].other.criteo_pi && this.app.teaserData[p].other.criteo_piu)) return;
                    let c = o.getElementsByClassName("mcimg"),
                        w = !1;
                    for (let I = 0; I < c.length; I++)
                        if (c[I].tagName === "DIV") {
                            w = c[I];
                            break
                        } if (!w) return;
                    let k = o.querySelector(".image-container"),
                        h = o.querySelector("img.mcimgad"),
                        y = o.querySelector(".mgline-inner"),
                        b = o.querySelector(".image-with-text");
                    if (this.app.deviceType === "mobile") {
                        let I = o.querySelector(".mctitle");
                        I.style.marginTop = "7px"
                    }
                    if (w.getElementsByClassName("criteo-informer").length === 0) {
                        let I = this.app.context.document.createElement("a");
                        I.className = "criteo-informer", I.href = this.app.teaserData[p].other.criteo_piu, I.target = "_blank", I.rel = "sponsored nofollow", I.style.top = "2px", I.style.right = "2px", I.style.backgroundImage = "url(" + this.app.teaserData[p].other.criteo_pi + ")", I.style.backgroundColor = "transparent", h && this._isAdvIconOnTop(h) && (I.style.right = h.offsetWidth + "px"), b.appendChild(I)
                    }
                })(e[i])
            }
            _isAdvIconOnTop(e) {
                if (e) {
                    let i = this.app.context.getComputedStyle(e).top.replace("px", "");
                    return i >= 0 && i <= 5
                }
            }
            _initAdChoiceStyles() {
                let e = `
div.mgline a.criteo-informer {
width: 19px !important;
height: 15px !important;
display: block;
opacity: 1;
background: #ffffff;
position: absolute;
right: 3px;
top: 3px;
z-index: 150000;
cursor: pointer;
-moz-transition: all 0.3s ease-out;
-o-transition: all 0.3s ease-out;
-webkit-transition: all 0.3s ease-out;
-ms-transition: all 0.3s ease-out;
transition: all 0.3s ease-out;
}
div.mgline:hover a.criteo-informer {
opacity: 1;
}
div.mcimg {
position: relative;
}
div.image-with-price {
position: relative;
}
.mgline .image-container {
width: auto;
margin: 0 auto;
position: relative;
}`;
                this.app.stylesheetsBlock.add("adChoise", e)
            }
        }
    });
    var fi = {};
    ft(fi, {
        RejectBlock: () => se
    });
    var se, ui = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        se = class extends $ {
            constructor(e) {
                super(e), this.isRejectNeeded = !1, this.name = "RejectBlock", this.app.isInsertedRejectStyles = !1, this.app["MarketGidReject"] = () => {
                    this.isRejectNeeded = !0
                }, this.addHook("afterLoadNewsHooks", this.initReject)
            }
            initReject() {
                this.isRejectNeeded && this.reject()
            }
            reject() {
                let e = this.app.root.querySelectorAll(".mgline");
                for (let i = 0; i < e.length; i++) {
                    let o = e[i],
                        p = o.querySelector(".close-informer"),
                        c = o.querySelector("div.mcimg"),
                        w = o.className.match(/teaser-([0-9]+)/),
                        k = o.className.match(/type-(w|e|i)/);
                    if (!p && c && o.className.indexOf("dsp") <= 0 && w && k && k[1] !== "i") {
                        let y = this.buildCloseBtn(w, k);
                        o.querySelector(".image-with-text")?.appendChild(y)
                    }
                }
                this.initRejectStyles()
            }
            buildCloseBtn(e, i) {
                let o = this.app.subnetDashboardDomain + "/publisher/blocked",
                    p = this.app.context.document.createElement("a");
                return p.className = "close-informer", p.href = o + "/teaser/" + e[1] + "/widget/" + (i[1] === "w" ? 57767475 + "/type/goods" : 0 + "/type/news"), p.target = "_blank", p.style.top = "2px", p.style.right = "3px", p.rel = "sponsored nofollow", p
            }
            initRejectStyles() {
                if (this.app.isInsertedRejectStyles) return;
                let e = `
div.mgline a.close-informer {
width: 14px !important;
height: 14px !important;
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzI0ODBDMzY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI0ODBDNDY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MjQ4MEMxNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3MjQ4MEMyNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uNcpEQAAAHxJREFUeNqckgEKwCAIRe3fYjfKc2zX6hydaLRbbDnGkLDIPggl/5lKIcbIRJRqbDSnUmOHE6LPm+CEfhj6lnN+o5WVh1VOm6xColCXc/cgLWYev9gaejnQojCab5RDzyDt6RantqoBaz5zq54ZywJ3CXjIwQGd8skfAQYALdQqftYulocAAAAASUVORK5CYIJ0ZW50Ij4NCiA8ZGl2IGNsYXNzPSJjb250ZW50LWNvbnRhaW5lciI+PGZpZWxkc2V0Pg0KICA8aDI+NTAyIC0gV2ViIHNlcnZlciByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHkgc2VydmVyLjwvaDI+DQogIDxoMz5UaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yLCBhbmQgaXQgY2Fubm90IGJlIGRpc3BsYXllZC4gV2hlbiB0aGUgV2ViIHNlcnZlciAod2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSkgY29udGFjdGVkIHRoZSB1cHN0cmVhbSBjb250ZW50IHNlcnZlciwgaXQgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSBjb250ZW50IHNlcnZlci48L2gzPg0KIDwvZmllbGRzZXQ+PC9kaXY+DQo8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg==");
display: block;
opacity: 0;
position: absolute;
right: 2px;
top: 2px;
z-index: 149999;
cursor: pointer;
-moz-transition: all 0.3s ease-out;
-o-transition: all 0.3s ease-out;
-webkit-transition: all 0.3s ease-out;
-ms-transition: all 0.3s ease-out;
transition: all 0.3s ease-out;
}
.mgline a.close-informer:hover {
opacity: 1;
}
.mgline .image-with-text img.mcimgad {
-moz-transition: all 0.3s ease-out;
-o-transition: all 0.3s ease-out;
-webkit-transition: all 0.3s ease-out;
-ms-transition: all 0.3s ease-out;
transition: all 0.3s ease-out;
}
div.mcimg {
position: relative;
}
div.image-with-price {
position: relative;
}
.mgline .image-container {
width: auto;
margin: 0 auto;
position: relative;
}`;
                this.app.stylesheetsBlock.add("reject", e), this.app.isInsertedRejectStyles = !0
            }
        }
    });
    var gi = {};
    ft(gi, {
        TeaserHoverBlock: () => ae
    });
    var ae, mi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        ae = class extends $ {
            constructor(e) {
                super(e), this.name = "TeaserHoverBlock", this.addHook("afterLoadNewsHooks", () => {
                    this._init()
                })
            }
            _init() {
                let e = this.app.root.querySelectorAll(".mgline");
                for (let i = 0; i < e.length; i++) {
                    let o = {
                        mgline: e[i],
                        advIcon: e[i].querySelector("img.mcimgad"),
                        criteoIcon: e[i].querySelector(".criteo-informer"),
                        rejectIcon: e[i].querySelector(".close-informer")
                    };
                    this._teaserHover(o)
                }
            }
            _teaserHover(e) {
                let i = e.mgline,
                    o = {
                        criteo: {
                            el: e.criteoIcon,
                            positionLimits: this._iconPositionLimits(e.criteoIcon, e.rejectIcon)
                        },
                        advIcon: {
                            el: e.advIcon,
                            positionLimits: this._iconPositionLimits(e.advIcon, e.rejectIcon)
                        },
                        rejectIcon: {
                            el: e.rejectIcon
                        }
                    };
                this.app.isTouchDevice() ? i.addEventListener("click", () => {
                    e.rejectIcon && this._moveIconsForward(o)
                }) : i.addEventListener("mouseenter", () => {
                    e.rejectIcon && this._moveIconsForward(o)
                }), i.addEventListener("mouseleave", () => {
                    e.rejectIcon && this._moveIconsBack(o)
                })
            }
            _iconPositionLimits(e, i) {
                let o = this._getIconCurrentPosition(e),
                    p = this._getIconCurrentPosition(i);
                return !e || !i ? {
                    initial: null,
                    ending: null
                } : {
                    initial: o.right,
                    ending: o.right + i.offsetWidth + p.right
                }
            }
            _moveIconsForward(e) {
                this._changeIconPosition(e.criteo, "mouseenter"), this._isAdvIconOnTop(e.advIcon.el) && this._changeIconPosition(e.advIcon, "mouseenter"), e.rejectIcon.el.style.opacity = "0.7"
            }
            _moveIconsBack(e) {
                this._changeIconPosition(e.criteo, "mouseleave"), this._isAdvIconOnTop(e.advIcon.el) && this._changeIconPosition(e.advIcon, "mouseleave"), e.rejectIcon.el.style.opacity = "0"
            }
            _changeIconPosition(e, i) {
                let o = e.positionLimits.initial,
                    p = e.positionLimits.ending;
                e.el && (i === "mouseenter" && p !== null && (e.el.style.right = p + "px"), i === "mouseleave" && o !== null && (e.el.style.right = o + "px"))
            }
            _getIconCurrentPosition(e) {
                let i = e ? this.app.context.getComputedStyle(e) : null;
                return {
                    right: i ? parseInt(i.right.replace("px", "")) : null,
                    top: i ? parseInt(i.top.replace("px", "")) : null
                }
            }
            _isAdvIconOnTop(e) {
                if (e) {
                    let i = this.app.context.getComputedStyle(e).top.replace("px", "");
                    return i >= 0 && i <= 5
                }
            }
        }
    });
    var xi = Bt(Lt => {
        "use strict";
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        Object.defineProperty(Lt, "__esModule", {
            value: !0
        });
        Lt.ConsentsBlock = void 0;
        var zs = function() {
            function D(e) {
                this.app = e
            }
            return D.prototype.ampApi = function(e) {
                var i = this;
                return new Promise(function(o, p) {
                    if (i.app.isAmp()) try {
                        i.app.ampConsentData = i.app.context.context.initialConsentValue, i.app.log("Consents. AMP API done."), e && setTimeout(function() {
                            e()
                        }, 0), o()
                    } catch (c) {
                        e && setTimeout(function() {
                            e()
                        }, 0), p(c)
                    } else e && setTimeout(function() {
                        e()
                    }, 0), o()
                })
            }, D.prototype.initTCFv2Proxy = function() {
                if (typeof this.app.context.__tcfapi == "function") return;
                for (var e = this.app.context, i, o = {}; e;) {
                    try {
                        if (e.frames.__tcfapiLocator) {
                            i = e;
                            break
                        }
                    } catch (c) {
                        this.app.log(c, "warn", c)
                    }
                    if (e === this.app.context.top) break;
                    e = e.parent
                }
                if (!i) return;
                this.app.context.__tcfapi = function(c, w, k, h) {
                    var y = Math.random() + "",
                        b = {
                            __tcfapiCall: {
                                command: c,
                                parameter: h,
                                version: w,
                                callId: y
                            }
                        };
                    o[y] = k, i.postMessage(b, "*"), c === "addEventListener" && setTimeout(function() {
                        var d = {
                            __tcfapiCall: {
                                command: "getTCData",
                                parameter: h,
                                version: w,
                                callId: y
                            }
                        };
                        i.postMessage(d, "*")
                    }, 100)
                };

                function p(c) {
                    var w = {};
                    try {
                        w = typeof c.data == "string" ? JSON.parse(c.data) : c.data
                    } catch (h) {
                        this.app.log(h, "warn", h)
                    }
                    var k = w ? w.__tcfapiReturn : null;
                    k && typeof o[k.callId] == "function" && (o[k.callId](k.returnValue, k.success), o[k.callId] = null)
                }
                this.app.context.addEventListener("message", p.bind(this), !1)
            }, D.prototype.tcfv2Api = function(e) {
                var i = this;
                return this.initTCFv2Proxy(), new Promise(function(o, p) {
                    if (typeof i.app.context.__tcfapi == "function") {
                        i.app.tcfv2Enabled = !0, i.app.requestParams = i.app.requestParams || {}, i.app.requestParams.tcfV2 = "tcfV2=1";
                        try {
                            var c = function(w, k) {
                                k && (w.eventStatus === "tcloaded" || w.eventStatus === "useractioncomplete") ? (i.app.tcfv2Data = w, i.app.context.localStorage && i.app.context.localStorage.setItem("MG_tcfv2Data", JSON.stringify(w)), i.app.log("Consents. TCFv2 API done."), e && setTimeout(function() {
                                    e()
                                }, 0), o()) : (k && !w.gdprApplies && (e && setTimeout(function() {
                                    e()
                                }, 0), o()), i.app.log("Consents. TCFv2 API paused."))
                            };
                            i.app.context.__tcfapi("getTCData", 2, c), i.app.context.__tcfapi("addEventListener", 2, c)
                        } catch (w) {
                            i.app.log("Consents. TCFv2 API fail."), e && setTimeout(function() {
                                e()
                            }, 0), p(w)
                        }
                    } else e && setTimeout(function() {
                        e()
                    }, 0), o()
                })
            }, D.prototype.gdprApi = function(e) {
                var i = this;
                return new Promise(function(o, p) {
                    var c = i.app.getMostTopWindow();
                    if (typeof c.__cmp == "function") {
                        i.app.cmpEnabled = !0, i.app.requestParams = i.app.requestParams || {}, i.app.requestParams.tcfV1 = "tcfV1=1";
                        try {
                            c.__cmp("getConsentData", null, function(w) {
                                i.app.consentData = w, i.app.context.localStorage && i.app.context.localStorage.setItem("MG_ConsentData", JSON.stringify(w)), i.app.log("Consents. TCFv1 API done."), e && setTimeout(function() {
                                    e()
                                }, 0), o()
                            })
                        } catch (w) {
                            e && setTimeout(function() {
                                e()
                            }, 0), p(w)
                        }
                    } else e && setTimeout(function() {
                        e()
                    }, 0), o()
                })
            }, D.prototype.ccpaApi = function(e) {
                var i = this;
                return new Promise(function(o, p) {
                    var c = i.app.getMostTopWindow();
                    if (typeof c.__uspapi == "function") {
                        i.app.uspEnabled = !0;
                        try {
                            c.__uspapi("getUSPData", 1, function(w, k) {
                                k ? (i.app.uspString = w.uspString || "", i.app.context.localStorage && i.app.uspString !== "" && i.app.context.localStorage.setItem("MG_uspString", i.app.uspString), i.app.log("Consents. CCPA API done.")) : i.app.log("Consents. CCPA API fail."), e && setTimeout(function() {
                                    e()
                                }, 0), o()
                            })
                        } catch (w) {
                            e && setTimeout(function() {
                                e()
                            }, 0), p(w)
                        }
                    } else e && setTimeout(function() {
                        e()
                    }, 0), o()
                })
            }, D.prototype.getGdprData = function() {
                var e = null;
                if (this.app.cmpEnabled || this.app.tcfv2Enabled || this.app.isAmp()) this.app.isAmp() && this.app.context.context.initialConsentState === 1 ? e = {
                    consentData: this.app.ampConsentData,
                    gdprApplies: +this.app.context.context.initialConsentState
                } : typeof this.app.tcfv2Data < "u" && typeof this.app.tcfv2Data.gdprApplies < "u" && typeof this.app.tcfv2Data.tcString < "u" ? e = {
                    consentData: this.app.tcfv2Data.tcString,
                    gdprApplies: +this.app.tcfv2Data.gdprApplies
                } : typeof this.app.consentData < "u" && typeof this.app.consentData.gdprApplies < "u" && typeof this.app.consentData.consentData < "u" && (e = {
                    consentData: this.app.consentData.consentData,
                    gdprApplies: +this.app.consentData.gdprApplies
                });
                else try {
                    if (this.app.context.localStorage) {
                        var i = JSON.parse(this.app.context.localStorage.getItem("MG_ConsentData"));
                        i != null && typeof i.gdprApplies < "u" && typeof i.consentData < "u" && (e = {
                            consentData: i.consentData,
                            gdprApplies: +i.gdprApplies
                        }), i = JSON.parse(this.app.context.localStorage.getItem("MG_tcfv2Data")), i != null && typeof i.gdprApplies < "u" && typeof i.tcString < "u" && (e = {
                            consentData: i.tcString,
                            gdprApplies: +i.gdprApplies
                        })
                    }
                } catch (o) {
                    this.app.log("getGdprData -> " + o.message)
                }
                return e
            }, D.prototype.getUspData = function() {
                var e = null;
                if (this.app.uspEnabled) e = {
                    uspString: ""
                }, this.app.uspString != "" && typeof this.app.uspString < "u" && (e.uspString = this.app.uspString);
                else try {
                    if (this.app.context.localStorage) {
                        var i = this.app.context.localStorage.getItem("MG_uspString");
                        i != null && i != "" && typeof i < "u" && (e = {
                            uspString: i
                        })
                    }
                } catch (o) {
                    this.app.log("getUspData -> " + o.message)
                }
                return e
            }, D.prototype.getConsentData = function() {
                var e = null,
                    i = this.getGdprData(),
                    o = this.getUspData();
                return i != null && (e = e || {}, Object.keys(i).forEach(function(p) {
                    return e[p] = i[p]
                })), o != null && (e = e || {}, Object.keys(o).forEach(function(p) {
                    return e[p] = o[p]
                })), e
            }, D.prototype.fetchConsents = function() {
                var e = this;
                return Promise.allSettled([this.ampApi(), this.tcfv2Api(), this.gdprApi(), this.ccpaApi()]).then(function() {
                    return e.getConsentData()
                })
            }, D
        }();
        Lt.ConsentsBlock = zs
    });
    var bi = {};
    ft(bi, {
        ConsentsBlock: () => oe
    });
    var wi, oe, ki = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        wi = Gt(xi()), oe = class extends $ {
            constructor(e) {
                super(e), this.refreshLimitTime = 5 * 60 * 1e3, this.vendorId = 358, this.isRefreshed = !1, this.name = "ConsentsBlock", this.consentsAdapter = new wi.ConsentsBlock(e), this.addHook("beforeInitHooks", this.consentsAdapter.ampApi.bind(this.consentsAdapter), 50), this.addHook("beforeInjectScriptHooks", this.consentsAdapter.tcfv2Api.bind(this.consentsAdapter), 30 * 1e3), this.addHook("beforeInitHooks", this.consentsAdapter.gdprApi.bind(this.consentsAdapter), 50), this.addHook("beforeInitHooks", this.consentsAdapter.ccpaApi.bind(this.consentsAdapter), 50)
            }
            getConsentData() {
                let e = this.consentsAdapter.getConsentData();
                return (!e || !e.gdprApplies) && typeof this.app.context._mgGdprApplies < "u" && (e = e || {}, e.gdprApplies = this.app.context._mgGdprApplies), (!e || !e.consentData) && typeof this.app.context._mgConsentData < "u" && (e = e || {}, e.consentData = this.app.context._mgConsentData), e
            }
            refreshWidget() {
                let e = this.app.tcfv2Data?.vendor?.consents[this.vendorId];
                if (!this.startTime && !e) {
                    this.topWindow = this.app.getMostTopWindow(), this.startTime = new Date().getTime();
                    let i, o, p = (c, w) => {
                        o = c.listenerId, w && (c.eventStatus === "tcloaded" || c.eventStatus === "useractioncomplete") && c?.vendor?.consents[this.vendorId] && !this.isRefreshed && (this.isRefreshed = !0, this.app.root.innerHTML = this.app.isAmp() ? "&#8291;" : "", this.app.stylesheetsBlock.add("refreshByConsents", this.app.styles), this.app.page++, this.app.countLoadBlocks = 0, this.app.injectScript(!1, 1), this.topWindow.__tcfapi("removeEventListener", 2, k => {
                            k && (o = void 0)
                        }, c.listenerId))
                    };
                    typeof this.topWindow.__tcfapi == "function" ? this.topWindow.__tcfapi("addEventListener", 2, p) : i = setInterval(() => {
                        if (new Date().getTime() - this.startTime >= this.refreshLimitTime) {
                            clearInterval(i), this.app.log(`${this.name}: Tcfapi not found.`);
                            return
                        }
                        typeof this.topWindow.__tcfapi == "function" && (clearInterval(i), this.topWindow.__tcfapi("addEventListener", 2, p))
                    }, 100), setTimeout(() => {
                        o && this.topWindow.__tcfapi("removeEventListener", 2, c => {}, o)
                    }, this.refreshLimitTime)
                }
            }
        }
    });
    var yi = {};
    ft(yi, {
        NavigatorAgentDataBlock: () => ne
    });
    var Et, ne, Ii = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        (function(D) {
            D.architecture = "scua", D.bitness = "scub", D.brands = "scu", D.fullVersionList = "scufvl", D.mobile = "scum", D.model = "scumd", D.platform = "scup", D.platformVersion = "scupv", D.uaFullVersion = "scufv", D.wow64 = "scuw"
        })(Et || (Et = {}));
        ne = class extends $ {
            constructor(e) {
                super(e), this.name = "NavigatorAgentDataBlock", this.app.context?.navigator?.userAgentData?.getHighEntropyValues && this.addHook("afterInitHooks", this.getUserAgentData, 10)
            }
            getUserAgentData() {
                return this.app.context.navigator.userAgentData.getHighEntropyValues(Object.keys(Et)).then(e => {
                    this.app.requestParams = this.app.requestParams || {}, Object.keys(e).forEach(i => {
                        let o = e[i];
                        if (typeof o == "boolean" && (this.app.requestParams[Et[i]] = `${Et[i]}=${encodeURIComponent(o?"?1":"?0")}`), typeof o == "string" && o.length && (this.app.requestParams[Et[i]] = `${Et[i]}=${encodeURIComponent('"'+o+'"')}`), Array.isArray(o) && o.length) {
                            let p = o.reduce((c, w, k, h) => c + `"${w.brand}";v="${w.version}"${k!==h.length-1?", ":""}`, "");
                            this.app.requestParams[Et[i]] = `${Et[i]}=${encodeURIComponent(p)}`
                        }
                    })
                })
            }
        }
    });
    var Di = {};
    ft(Di, {
        RefreshNewsBlock: () => re
    });
    var re, Ti = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        re = class extends $ {
            constructor(e) {
                super(e), this.name = "RefreshNewsBlock", this.refreshHashes = [], this.app.addClickHandler(this.app.clickHandlerList.refreshNews.handler, this.app.clickHandlerList.refreshNews.priority), this.app.refreshNewsHandler = i => {
                    this.clickHandler(i)
                }, this.addHook("beforeLoadNewsHooks", this.updateJsonForRefresh)
            }
            clickHandler(e) {
                if (!(this.app.getWidgetValue("useRefreshNews", !1) && !this.app.getWidgetValue("elastic", !0))) return !0;
                let i = e.getAttribute("data-hash");
                if (this.app.teaserData[i].coopType === "e") {
                    this.refreshHashes.push(i);
                    let o = this.app.createServicerScriptElement(!1, 1),
                        p = {};
                    for (let h in this.app.teaserData) this.app.teaserData[h].coopType === "e" && (p[this.app.teaserData[h].id] = 1);
                    let w = [`exclude_news=${Object.keys(p).join(",")}`, "rsh=1", "nn=1", "limitads=1", `initial_composite=${this.app.id}`],
                        k = this.app.getActiveChilds().join(",");
                    k !== "" && w.push(`childs=${k}`), this.app.uniqId !== "" && w.push(`uniqId=${this.app.uniqId}`), o.src += "?" + w.join("&"), this.app.context.document.head.appendChild(o)
                }
                return !0
            }
            updateJsonForRefresh(e, i) {
                if (this.app.getWidgetValue("useRefreshNews", !1) && !this.app.getWidgetValue("elastic", !0))
                    if (this.app.isArray(e))
                        if (i.refresh === 1 && this.refreshHashes.length > 0) {
                            if (this.app.root.innerHTML = "", this.app.stylesheetsBlock.add("main", this.app.styles), this.app.countLoadBlocks = 0, e.length === 0) {
                                this.app.updatedJson = this.app.json;
                                return
                            }
                            let o = this.app.json;
                            for (let p = 0; p < o.length; p++)
                                if (o[p][9] === this.refreshHashes[0]) {
                                    o[p] = e[0], this.refreshHashes.shift();
                                    break
                                } this.app.updatedJson = o
                        } else this.app.updatedJson = e;
                else this.app.updatedJson = e
            }
        }
    });
    var vi = {};
    ft(vi, {
        CountersBlock: () => pe
    });
    var pe, Ei = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        pe = class extends $ {
            constructor(e) {
                super(e), this.impTrackCapping = {}, this.name = "CountersBlock", this.addHook("afterLoadNewsHooks", this.countersLoad), this.app.root && (this.addHook("afterInitHooks", this.pageViewPixel), this.addHook("afterLoadNewsHooks", this.widgetPerformancePixel), this.addHook("afterLoadNewsHooks", this.parseImpTracker), this.addHook("afterPrepareCappingDataHooks", this.sendImpTrackCapping), this.addHook("afterPrepareCappingDataHooks", this.sendJsTrackers))
            }
            countersLoad() {
                let e = 0;
                if (Number(this.app.id) !== Number(1435486)) {
                    let i = this.app.childWidgetsData[this.app.id];
                    e = i ? i.newsWidgetIdPartner : null
                }
            }
            widgetPerformancePixel(e) {}
            pageViewPixel() {
                let e = this.app.getMostTopWindow(),
                    i = e.location.pathname;
                e["_mgPageViewEndPoint" + 872416] = e["_mgPageViewEndPoint" + 872416] || [];
                let o = e["_mgPageViewEndPoint" + 872416],
                    p = this.app.globalSettings?.ia_page_view_timeout || 180,
                    c = 0,
                    w = 0;
                try {
                    this.app.context.localStorage && (c = Number(this.app.context.localStorage.getItem("_mgPageViewEndPoint" + 872416)), w = Number(this.app.context.localStorage.getItem("_mgPvidTime")), new Date().getTime() - w > p * 1e3 && this.app.context.localStorage.setItem("_mgPvid", this.app.generatePvid()))
                } catch {}
                new Date().getTime() - c > p * 1e3 && Array.isArray(o) && o.indexOf(i) === -1 && (this.app.injectionScriptMethod(), o.push(i)), this.app.initServicerRequest = !1
            }
            parseImpTracker() {
                let e = Object.keys(this.app.teaserData);
                for (let i in e)
                    if (Array.isArray(this.app.teaserData[e[i]].other.impt)) {
                        for (let o = 0; o < this.app.teaserData[e[i]].other.impt.length; o++)
                            if (!(typeof this.app.teaserData[e[i]].other.impt[o].completed < "u")) {
                                if (this.app.teaserData[e[i]].other.impt[o].only_viewable === 1) typeof this.impTrackCapping[e[i]] > "u" && (this.impTrackCapping[e[i]] = []), this.impTrackCapping[e[i]].push(this.app.teaserData[e[i]].other.impt[o]);
                                else {
                                    let p = this.app.teaserData[e[i]].other.impt[o].code;
                                    this.app.teaserData[e[i]].other.impt[o].type === "i" && this.sendCustomCounter(p), this.app.teaserData[e[i]].other.impt[o].type === "j" && (this.app.teaserData[e[i]].other.impt[o].iframe === 1 ? this.sendIframeTracker(e[i], p, o) : this.sendInlineTracker(e[i], p))
                                }
                                this.app.teaserData[e[i]].other.impt[o].completed = 1
                            }
                    }
            }
            sendImpTrackCapping(e) {
                if (!(typeof this.impTrackCapping[e] > "u"))
                    for (let i = 0; i < this.impTrackCapping[e].length; i++) this.impTrackCapping[e][i].type === "i" && this.sendCustomCounter(this.impTrackCapping[e][i].code), this.impTrackCapping[e][i].type === "j" && (this.impTrackCapping[e][i].iframe === 1 ? this.sendIframeTracker(e, this.impTrackCapping[e][i].code, i) : this.sendInlineTracker(e, this.impTrackCapping[e][i].code))
            }
            sendCustomCounter(e) {
                this.app.request.pixel("widgetCustomCounter", e, {
                    mgbuster: "mgbuster=" + ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5)
                }, {})
            }
            sendIframeTracker(e, i, o) {
                let p = "<script>window.onerror = function() { return true; };<\/script>";
                p += i;
                let c = this.app.context.document.createElement("iframe");
                c.style.display = "none", this.app.renderInSafeIframe(c, `${e}_${o}`, p), this.app.root.appendChild(c)
            }
            sendInlineTracker(e, i) {
                let o = this.getMglineByHash(e);
                if (!o) return;
                o.insertAdjacentHTML("beforeend", i);
                let p = o.childNodes;
                for (let c = 0; c < p.length; c++)
                    if (p[c] instanceof HTMLScriptElement) {
                        let w = p[c],
                            k = this.app.context.document.createElement("script");
                        k.src = w.src, o.removeChild(w), o.appendChild(k)
                    }
            }
            getMglineByHash(e) {
                let i = this.app.root.getElementsByClassName("mgline");
                for (let o = 0; o < i.length; o++)
                    if (i[o].getAttribute("data-i") === e) return i[o];
                return null
            }
            sendJsTrackers(e) {
                if (Array.isArray(this.app.teaserData[e].other.jst))
                    for (let i = 0; i < this.app.teaserData[e].other.jst.length; i++) {
                        let o = "<script>window.onerror = function() { return true; };<\/script>";
                        o += this.app.teaserData[e].other.jst[i];
                        let p = this.app.context.document.createElement("iframe");
                        p.style.display = "none", this.app.renderInSafeIframe(p, `${e}_${i}`, o), this.app.root.appendChild(p)
                    }
            }
        }
    });
    var Ci = {};
    ft(Ci, {
        BlurBlock: () => ce
    });
    var ce, Wi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        ce = class extends $ {
            constructor(e) {
                super(e), this.name = "BlurBlock", this.isIE11 = !!window.MSInputMethodContext && !!document.documentMode, this.addHook("afterLoadNewsHooks", this.rendering)
            }
            rendering() {
                let e = this.app.templateContent;
                if (!e) return;
                let i = e.querySelectorAll("[class*=mgline-small-blur]");
                if (!i.length) return;
                let o = {
                    r: 159,
                    g: 138,
                    b: 126
                };
                for (let p = 0; p < i.length; p++) {
                    let c = i[p],
                        w = i[p].getElementsByClassName("text-elements")[0],
                        k = i[p].getElementsByClassName("mctitle")[0],
                        h = i[p].getElementsByClassName("mcdomain")[0],
                        y = i[p].getElementsByClassName("mcdesc")[0],
                        b = i[p].querySelector("img.mcimg"),
                        d = i[p].querySelector("video.mcvideo");
                    b === null && d === null || (this.isIE11 ? (w.style.background = "rgba(0,0,0,0.3)", c.style.background = "#081010") : b ? this.app.colorBlock.colorAverage(b).then(I => {
                        this._createGradient(c, e, I, w), c.style.background = "rgb(" + I.r + "," + I.g + "," + I.b + ")", this._changeColor(I, k, h, y)
                    }) : (this._createGradient(c, e, o, w), c.style.background = "rgb(" + o.r + "," + o.g + "," + o.b + ")", this._changeColor(o, k, h, y)))
                }
            }
            _createGradient(e, i, o, p) {
                let c = this._blurDirection(e, i);
                if (p.style.background = `linear-gradient(${c}, transparent,
                        rgba(${o.r}, ${o.g}, ${o.b}, 0) 4%,
                        rgba(${o.r}, ${o.g}, ${o.b}, 0.5) 8%,
                        rgb(${o.r}, ${o.g}, ${o.b}) 12%`, typeof ResizeObserver < "u") new ResizeObserver(() => {
                    let k = this._blurDirection(e, i);
                    p.style.background = `linear-gradient(${k}, transparent,
                          rgba(${o.r}, ${o.g}, ${o.b}, 0) 4%,
                          rgba(${o.r}, ${o.g}, ${o.b}, 0.5) 8%,
                          rgb(${o.r}, ${o.g}, ${o.b}) 12%`
                }).observe(i);
                else {
                    let w = c;
                    window.addEventListener("resize", () => {
                        let k = this._blurDirection(e, i);
                        k !== w && (p.style.background = `linear-gradient(${k}, transparent,
                        rgba(${o.r}, ${o.g}, ${o.b}, 0) 4%,
                        rgba(${o.r}, ${o.g}, ${o.b}, 0.5) 8%,
                        rgb(${o.r}, ${o.g}, ${o.b}) 12%`), w = this._blurDirection(e, i)
                    })
                }
            }
            _blurDirection(e, i) {
                let o = /\bmgline-small-blur-[^\s]*\b/.exec(e.classList.value),
                    p = 480,
                    c = this.app.context.matchMedia(`(max-width: ${p}px)`).matches,
                    w = "to bottom";
                return !c && i.offsetWidth > p && o && (w = `to ${o[0].split("-").pop()}`), w
            }
            _changeColor(...e) {
                let i = e[0],
                    o = e.slice(1),
                    p = .299 * i.r + .587 * i.g + .114 * i.b > 186 ? "#000" : "#fff";
                o.length !== 0 && o.forEach(c => {
                    c && (c.getElementsByTagName("a")[0].style.color = p)
                })
            }
            _changeFontSize(...e) {
                let i = e[0];
                e.slice(1).forEach(p => {
                    if (p) {
                        let w;
                        i === "to bottom" || i === "to top" ? w = this.app.autoSizeTitle - Math.round(p.offsetHeight / this.app.autoSizeTitle) : w = 22 - Math.round(p.offsetHeight / 22), p.getElementsByTagName("a")[0].style.cssText = `font-size: ${w}px`
                    }
                })
            }
        }
    });
    var Si = {};
    ft(Si, {
        SubnetsBlock: () => he
    });
    var he, Pi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        he = class extends $ {
            constructor(e) {
                super(e), this.name = "SubnetsBlock", this.addHook("afterInitHooks", this._init), this.app.currentSubnet = 0, this.app.subnetMirrorsImage = "", this.app.subnetMirrorsUtm = "", this.app.subnetDashboardDomain = ""
            }
            _init() {
                let e = [1435486];
                this._childWidgets = JSON.parse("[]");
                let i = JSON.parse("[]");
                this._childFuncBlockList = [];
                for (let c in this._childWidgets) this._childWidgets.hasOwnProperty(c) && e.push(this._childWidgets[c].childId);
                for (let c in i)
                    if (i.hasOwnProperty(c)) {
                        this._childFuncBlockList[c] = this._childFuncBlockList[c] || [];
                        for (let w in i[c]) i[c].hasOwnProperty(w) && this._childFuncBlockList[c].push(i[c][w].split("/").pop())
                    } let o = this._loadSubnets(),
                    p = this.app.uniqId !== "" ? "_" + this.app.uniqId : "";
                e.forEach(c => {
                    this.app.context["mgReject" + c] = this.app["MarketGidReject"], this.app.context["mgLoadAds" + c + p] = (w, k) => {
                        let h = o[0];
                        this._loadAds(w, k, c, 0, h.mirror)
                    };
                    for (let w in o)
                        if (o.hasOwnProperty(w)) {
                            let k = o[w];
                            k.id !== 1 && (this.app.context[k.informer_prefix + "CReject" + c] = this.app["MarketGidReject"], this.app.context[k.informer_prefix + "LoadGoods" + c + p] = (h, y) => {
                                this._loadAds(h, y, c, k.id, k.mirror)
                            })
                        }
                })
            }
            _loadSubnets() {
                let e = JSON.parse('[{"id":0,"informer_prefix":"MarketGid","mirror":"mgid.com","mirrorName":"marketgid","imageDomain":"mgid.com","dashboardDomain":"dashboard.mgid.com","utm":"?utm_source={domain}&utm_medium=referral&utm_campaign=widgets&utm_content="}]'),
                    i = e[0];
                return this.app.subnetMirrorsImage = i.imageDomain, this.app.subnetMirrorsUtm = i.utm, this.app.subnetDashboardDomain = this.app.webProtocol + "//" + i.dashboardDomain, e
            }
            _loadAds(e, i, o, p, c) {
                if (this.app.id = o, this.app.loadedType = "goods", this.app.currentSubnet = p, this.app.currentSubnetDomain = c, this.app.originalId !== this.app.id) {
                    if (typeof this._childFuncBlockList[this.app.id] < "u") {
                        let w = this._childFuncBlockList[this.app.id];
                        this._executeFuncBlock(w)
                    }
                    if (typeof this._childWidgets[this.app.id] < "u" && typeof this._childWidgets[this.app.id].customFuncBlocks < "u") {
                        let w = this._childWidgets[this.app.id].customFuncBlocks;
                        this._executeFuncBlock(w)
                    }
                }
                typeof this.app.updatePrecalcRect < "u" && this.app.isArray(e) && e.length !== this.app.getExpectedCountNews() ? this.app.updatePrecalcRect(() => {
                    this.app.loadedType = "goods", this.app.currentSubnet = p, this.app.lifeCycleBlock.render(e, i)
                }, e.length) : this.app.lifeCycleBlock.render(e, i)
            }
            _executeFuncBlock(e) {
                for (let i in e)
                    if (e.hasOwnProperty(i)) {
                        let o = e[i],
                            p = o.replace(/[-_]/g, "").replace(/./, c => c.toUpperCase()) + "Block";
                        try {
                            this.app[p] = new window["MarketGidInfC1435486"].childFuncBlocks[o](this.app)
                        } catch (c) {
                            this.app.log(`SubnetsBlock - ${o} error:`, "error", c)
                        }
                    }
            }
        }
    });
    var _i = {};
    ft(_i, {
        MgqBlock: () => le
    });
    var le, Bi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        le = class extends $ {
            constructor(e) {
                super(e), this.name = "MgqBlock", this.isLongCheck = !1, this._worker = this._createWorker(), this.addHook("afterInitHooks", this._init)
            }
            _init() {
                this.app.context._mgq = this.app.context._mgq || [], typeof this.app.context._mgqp > "u" && (this.app.context._mgqp = this._worker, this.app.context._mgqt = new Date().getTime(), this._worker())
            }
            _createWorker() {
                return () => {
                    let e = this.app.context._mgq.length,
                        i = this.app.context._mgq.slice(0),
                        o = 0;
                    for (let p = 0; p < e; p++) {
                        let c = i[p];
                        if (typeof this.app.context[c[0]] == "function") {
                            try {
                                this.app.context[c[0]].apply(this.app.context, c.slice(1))
                            } catch (w) {
                                this.app.log("mgq error:", "error", w)
                            }
                            this.app.context._mgq.splice(p - o, 1), o++
                        }
                    }
                    this.app.context._mgqi || (this.app.context._mgqi = this.app.context.setInterval(() => {
                        this._worker()
                    }, 5)), this.isLongCheck || new Date().getTime() - this.app.context._mgqt > 1e4 && (this.isLongCheck = !0, this.app.context.clearInterval(this.app.context._mgqi), this.app.context._mgqi = this.app.context.setInterval(() => {
                        this._worker()
                    }, 100))
                }
            }
        }
    });
    var Ai = {};
    ft(Ai, {
        SmartDoubleClickBlock: () => de
    });
    var Gi, Vs, qs, de, Mi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Gi = 1, Vs = 100, qs = {
            undefined: -1,
            desktop: 1,
            mobile: 2,
            tablet: 3,
            smarttv: 4
        }, de = class extends $ {
            constructor(e) {
                super(e), this.name = "SmartDoubleClickBlock", this.app.isDisabledBySmartDoubleClick = !1, this.addHook("afterInitHooks", this._init)
            }
            _init() {
                this.groups = this.app.getWidgetValue("doubleclickParameters", JSON.parse('{"1":{"borderTop":{"max":1,"min":0,"percent":100}},"2":{"borderLeft":{"max":1,"min":0,"percent":100}},"3":{"borderRight":{"max":1,"min":0,"percent":100}},"4":{"borderBottom":{"max":1,"min":0,"percent":100}}}')), !(!this.groups || !this.app.isEnabledDoubleClick()) && (this.doubleClickCheckId = 0, this.loadedTime = this.app.getCurrentTimestamp(), this.handlers = this._getHandlers(), this.app.onSmartDoubleClickHandler = this._onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.onSmartDoubleClick.handler, this.app.clickHandlerList.onSmartDoubleClick.priority))
            }
            _getGroupPercent(e, i, o) {
                let p = 0,
                    c = i.getBoundingClientRect();
                for (let w in this.handlers) {
                    if (!this.handlers[w]) continue;
                    let k = this.handlers[w](e, o, c);
                    if (k === !1) return !1;
                    p += k
                }
                return p / Object.keys(e).length
            }
            _getGroupElementPercent(e, i, o) {
                return e.hasOwnProperty(i) ? e[i].hasOwnProperty("value") && o === e[i].value || e[i].hasOwnProperty("min") && o >= e[i].min && o <= e[i].max ? e[i].percent : !1 : 0
            }
            _getDoubleClickPercent(e, i) {
                for (let o in this.groups) {
                    if (!this.groups[o]) continue;
                    let p = this._getGroupPercent(this.groups[o], e, i);
                    if (p !== !1) return this.doubleClickCheckId = o, p
                }
                return this.doubleClickCheckId = 0, Gi - 1
            }
            _onClick(e, i) {
                let o = this.app.random(Gi, Vs);
                return this.app.doubleClickPercent = this._getDoubleClickPercent(e, i), this.app.isDisabledBySmartDoubleClick = this.app.doubleClickPercent < o, this.app.doubleClickCheckId = this.app.isDisabledBySmartDoubleClick ? 0 : this.doubleClickCheckId, !0
            }
            _getHandlers() {
                return [e => this._getGroupElementPercent(e, "device", qs[this.app.deviceType] || ""), e => this._getGroupElementPercent(e, "browser", this.app.browserId), e => this._getGroupElementPercent(e, "click_time", this.app.getCurrentTimestamp() - this.loadedTime), e => this._getGroupElementPercent(e, "width", this.app.root.offsetWidth), e => this._getGroupElementPercent(e, "height", this.app.root.offsetHeight), e => this._getGroupElementPercent(e, "click_y", this.app.root.mouseY), e => this._getGroupElementPercent(e, "click_x", this.app.root.mouseX), e => this._getGroupElementPercent(e, "hw_ratio", this.app.root.offsetHeight / this.app.root.offsetWidth), (e, i) => this._getGroupElementPercent(e, "borderTop", i.offsetY), (e, i) => this._getGroupElementPercent(e, "borderLeft", i.offsetX), (e, i, o) => this._getGroupElementPercent(e, "borderRight", o.width - i.offsetX), (e, i, o) => this._getGroupElementPercent(e, "borderBottom", o.height - i.offsetY), e => this._getGroupElementPercent(e, "research", 1)]
            }
        }
    });
    var Li = {};
    ft(Li, {
        MobileDoubleClickBlock: () => fe
    });
    var fe, Ni = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        fe = class extends $ {
            constructor(e) {
                super(e), this.name = "MobileDoubleClickBlock", ("ontouchstart" in window || navigator.msMaxTouchPoints > 0) && (this.addHook("afterSendCappingHooks", this._init), this.informerId = this.app.root.getAttribute("id"))
            }
            _init() {
                !this.app.isEnabledDoubleClick() || (this.app.doubleClickTimeLoaded || (this.app.doubleClickTimeLoaded = new Date().getTime() / 1e3), this.app.stylesheetsBlock.add("doubleclickMobile", this._getStyles()), this.app.showDoubleClickButton = this._onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.showMobileDoubleClick.handler, this.app.clickHandlerList.showMobileDoubleClick.priority))
            }
            _onClick(e, i) {
                if (this.app.isDisabledBySmartDoubleClick) return !0;
                this.app.doubleClickType = "mobile", this.app.linksBlocked = !1;
                let o = e;
                if (!1 === 1) {
                    if (this.app.doubleClickHandler(o), o.className.indexOf("mgbuybox") === -1) {
                        for (; o.tagName !== "A" && o.id !== this.informerId;)
                            if (o = o.parentNode, o.id === this.informerId) return !1;
                        try {
                            for (; o.className.indexOf("mgline") === -1;) o = o.parentNode
                        } catch {
                            return !1
                        }
                        let p = o;
                        p.dataset.clicked !== "1" && (i.preventDefault(), this.app.linksBlocked = !0), p.dataset.clicked = "1";
                        let c = p.querySelector(".mgfree"),
                            w = p.querySelector(".mgbuybox");
                        c.style.opacity = 0, w.style.opacity = 1, w.style.opacity = 1, w.style.zIndex = 9999, setTimeout(() => {
                            c.style.opacity = 1, w.style.opacity = 0, p.dataset.clicked = "0", w.style.zIndex = -9999
                        }, 1e4)
                    }
                } else {
                    let p = new Date().getTime() / 1e3,
                        c = this.app.getWidgetValue("mobileDoubleclickDelay", 0);
                    if (o.className !== "MarketGidCDButton" + 1435486 && (c === 0 || p - this.app.doubleClickTimeLoaded < c)) {
                        for (this.app.doubleClickHandler(o), this.app.linksBlocked = !0, i.preventDefault(); o.tagName !== "A" && o.id !== this.informerId;)
                            if (o = o.parentNode, o.id === this.informerId) return;
                        let w = o.getAttribute(this.app.hrefAttr);
                        for (o = i.target; !o.classList.contains("mgline");) o = o.parentNode;
                        let k = o,
                            h = this.app.context.document.createElement("div");
                        h.className = "MarketGidCDLayout" + 1435486, h.style.zIndex = 1e5;
                        let y = this.app.context.document.createElement("a"),
                            b = 80,
                            d = 80,
                            I = (1 - b / k.offsetHeight) / 2 * 100,
                            u = k.offsetWidth / d * .98,
                            T = o.querySelector("a");
                        T && T.getAttribute("data-hash") && y.setAttribute("data-hash", T.getAttribute("data-hash")), y.innerHTML = this.app.getTranslation("[GO]"), (typeof w == "string" || w instanceof String) && (w = w + (w.indexOf("?") >= 0 ? "&" : "?") + "wct=" + this.app.doubleClickType), y.href = w, y.style.top = I + "%";
                        let E = u > 1 ? (1 - d / k.offsetWidth) / 2 * 100 : 0;
                        y.style.left = E + "%", k.offsetHeight <= 100 && (u = .5), u < 1 && (y.style.transform = "scale3d(" + u + "," + u + "," + u + ")", y.style.webkitTransform = "scale3d(" + u + "," + u + "," + u + ")", y.style.transformOrigin = "left", y.style.webkitTransformOrigin = "left"), y.target = "_blank", y.className = "MarketGidCDButton" + 1435486, h.appendChild(y);
                        let W = k.querySelector(".mgline-inner");
                        W ? W.appendChild(h) : k.appendChild(h);
                        let S = this.app.getWidgetValue("mobileDoubleclickDelay", 0);
                        setTimeout(() => {
                            u = u < 1 ? u : 1, y.style.transform = "scale3d(" + u + "," + u + "," + u + ")"
                        }, S), setTimeout(() => {
                            h.parentNode.removeChild(h)
                        }, 1e4)
                    } else return this.app.doubleClickHandler(o, !0), !0
                }
            }
            _getStyles() {
                return ".MarketGidCDButton" + 1435486 + '{display:       inline-block;width:         170px !important;height:        50px !important;line-height:        50px !important;background-color: RGBA(0,0,0,0);border:        1px solid white;border-radius:        3px;color:         white !important;font:          normal 500 18px/50px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);text-align:    center;padding:    0 10px;text-shadow:   none;position: absolute;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;margin: auto !important;text-decoration: none !important;transition:all 1s;}.MarketGidCDLayout' + 1435486 + "{height: 100%;width: 100%;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 99999;}#MarketGidCComposite" + 1435486 + " .mgline {position:relative}"
            }
        }
    });
    var Hi = {};
    ft(Hi, {
        DesktopDoubleClickBlock: () => ue
    });
    var ue, Ri = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        ue = class extends $ {
            constructor(e) {
                super(e), this.name = "DesktopDoubleClickBlock";
                let i = "ontouchstart" in window || navigator.msMaxTouchPoints > 0,
                    o = "addEventListener" in window.document;
                !i && o && (this.addHook("afterSendCappingHooks", this._init), this.informerId = this.app.root.getAttribute("id"))
            }
            _init() {
                !this.app.isEnabledDoubleClick() || (this.app.doubleClickTimeLoaded || (this.app.doubleClickTimeLoaded = new Date().getTime() / 1e3), this.app.stylesheetsBlock.add("desktopDoubleClick", this._getStyles()), this.app.showDesktopDoubleClickButton = this._onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.showDesktopDoubleClick.handler, this.app.clickHandlerList.showDesktopDoubleClick.priority))
            }
            _onClick(e, i) {
                if (this.app.isDisabledBySmartDoubleClick) return !0;
                this.app.linksBlocked = !1, this.app.doubleClickType = "desktop";
                let o = e,
                    p = parseInt(new Date().getTime() / 1e3),
                    c = this.app.getWidgetValue("desktopDoubleclickDelay", 0);
                if (o.className !== "MarketGidCDButton" + 1435486 && (c === 0 || p - this.app.doubleClickTimeLoaded < c)) {
                    for (this.app.doubleClickHandler(o), i.preventDefault(), this.app.linksBlocked = !0; o.tagName != "A" && o.id != this.informerId;)
                        if (o = o.parentNode, o.id == this.informerId) return !1;
                    let w = o.getAttribute(this.app.hrefAttr);
                    o = i.target;
                    try {
                        for (; !o.classList.contains("mgline");) o = o.parentNode
                    } catch {
                        return !1
                    }
                    let k = o,
                        h = k.offsetHeight,
                        y = this.app.context.document.createElement("div");
                    y.className = "MarketGidCDLayout" + 1435486, y.style.zIndex = 1e5;
                    let b = this.app.context.document.createElement("a"),
                        d = h / 3 + 2,
                        I = d;
                    b.style.width = d - 2 + "px", b.style.lineHeight = d - 2 + "px", b.style.height = "33.33%", k.offsetHeight <= 100 && (I = 80, d = 80, b.style.width = "80px", b.style.lineHeight = "78px", b.style.height = "80px");
                    let u = (1 - d / k.offsetHeight) / 2 * 100;
                    i.clientY - k.getBoundingClientRect().top < h / 2 ? u = (1 - 2 * d / h) * 100 / 4 + 50 : u = (1 - 2 * d / h) * 100 / 4, k.offsetHeight <= 100 && (u = "-34");
                    let T = k.offsetWidth / I * .98;
                    b.innerHTML = this.app.getTranslation("[GO]"), (typeof w == "string" || w instanceof String) && (w = w + (w.indexOf("?") >= 0 ? "&" : "?") + "wct=" + this.app.doubleClickType), b.href = w;
                    let E = o.querySelector("a");
                    E && E.getAttribute("data-hash") && b.setAttribute("data-hash", E.getAttribute("data-hash")), b.style.top = u + "%";
                    let W = T > 1 ? (1 - I / k.offsetWidth) / 2 * 100 : 0;
                    k.offsetHeight <= 100 && (W = "45.5"), b.style.left = W + "%", parseFloat(b.style.width) <= 50 && (b.style.font = "normal 500 12px/" + b.style.width + ' "Sans", sans-serif'), k.offsetHeight <= 100 && (T = .5), T < 1 && (b.style.transform = "scale3d(" + T + "," + T + "," + T + ")", b.style.webkitTransform = "scale3d(" + T + "," + T + "," + T + ")", b.style.transformOrigin = "left", b.style.webkitTransformOrigin = "left"), b.target = "_blank", b.className = "MarketGidCDButton" + 1435486, y.appendChild(b);
                    let S = k.querySelector(".mgline-inner");
                    S ? S.appendChild(y) : k.appendChild(y), setTimeout(() => {
                        T = T < 1 ? T : 1, b.style.transform = "scale3d(" + T + "," + T + "," + T + ")"
                    }, 500), setTimeout(() => {
                        y.parentNode.removeChild(y)
                    }, 1e4)
                } else return this.app.doubleClickHandler(o, !0), !0
            }
            _getStyles() {
                return ".MarketGidCDButton" + 1435486 + '{display:       inline-block;width:         170px !important;height:        50px !important;line-height:        50px !important;background-color: RGBA(0,0,0,0);border:        1px solid white;border-radius:        3px;color:         white !important;font:          normal 500 18px/50px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);text-align:    center;padding:    0 10px;text-shadow:   none;position: absolute;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;margin: auto !important;text-decoration: none !important;transition:all 1s;}.MarketGidCDLayout' + 1435486 + "{height: 100%;width: 100%;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 100;}#MarketGidCComposite" + 1435486 + " .mgline {position:relative}"
            }
        }
    });
    var Oi = {};
    ft(Oi, {
        SspDoubleClickBlock: () => ge
    });
    var ge, zi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        ge = class extends $ {
            constructor(e) {
                super(e), this.name = "SspDoubleClickBlock", this.addHook("afterSendCappingHooks", this._onCapping), this.addHook("afterInjectScriptHooks", this._init), this.app.doubleClickType = "ssp", this.app.hashTimer = [], this.servicerDoubleClickStatus = !1
            }
            _init() {
                this.app.stylesheetsBlock.add("ssp_doubleclick", this._getStyles());
                let e = setInterval(() => {
                    if (this.servicerDoubleClickStatus === !0) {
                        clearInterval(e);
                        return
                    }!this.app.isEnabledDoubleClick() && typeof this.app.servicerData.dc < "u" && this.app.root.querySelectorAll("a[data-hash]").length > 0 && (this.app.sspDoubleClickHandler = this._onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.sspDoubleClick.handler, this.app.clickHandlerList.sspDoubleClick.priority), this.servicerDoubleClickStatus = !0)
                }, 100)
            }
            _onClick(e, i) {
                let o = e.getAttribute("data-hash"),
                    p = new Date().getTime();
                return o in this.app.hashTimer && p - this.app.hashTimer[o] > this.app.servicerData.dc || this.app.teaserData[o].coopType !== "w" || e.className === "MarketGidDButton" + 1435486 ? (this.app.doubleClickHandler(e, !0), !0) : (this.app.doubleClickHandler(e), i.preventDefault(), this._showButton(e), !1)
            }
            _showButton(e) {
                let i = this.app.context.document.createElement("div");
                i.classList.add("MarketGidDLayout" + 1435486);
                let o = e.closest(".mgline");
                o !== null && o.appendChild(i);
                let p = this.app.context.document.createElement("a");
                p.classList.add("MarketGidDButton" + 1435486);
                let c = e.getAttribute("href");
                (typeof c == "string" || c instanceof String) && (c = c + (c.indexOf("?") >= 0 ? "&" : "?") + "wct=" + this.app.doubleClickType), p.href = c, p.setAttribute("data-hash", e.getAttribute("data-hash"));
                let w = 80,
                    k = 80,
                    h = (1 - w / o.offsetHeight) / 2 * 100,
                    y = o.offsetWidth / k * .98;
                p.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIHBvaW50cz0iMTIsMjkuMSAyMi4yLDE5IDEyLjEsOC45IDE0LDcgMjYsMTkgMTQsMzEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMSI+PC9wb2x5Z29uPjwvc3ZnPg==)", p.style.backgroundPosition = "center", p.style.top = h + "%";
                let b = y > 1 ? (1 - k / o.offsetWidth) / 2 * 100 : 0;
                p.style.left = b + "%", y < 1 && (p.style.transform = "scale3d(" + y + "," + y + "," + y + ")", p.style.webkitTransform = "scale3d(" + y + "," + y + "," + y + ")", p.style.transformOrigin = "left", p.style.webkitTransformOrigin = "left"), p.target = "_blank", i.appendChild(p), setTimeout(() => {
                    y = y < 1 ? y : 1, p.style.transform = "scale3d(" + y + "," + y + "," + y + ")"
                }, 10), setTimeout(() => {
                    i.parentNode.removeChild(i)
                }, 1e4)
            }
            _onCapping() {
                if (typeof this.app.sspDoubleClickHash < "u")
                    for (let e = 0; e < this.app.sspDoubleClickHash.length; e++) typeof this.app.hashTimer[this.app.sspDoubleClickHash[e]] > "u" && (this.app.hashTimer[this.app.sspDoubleClickHash[e]] = new Date().getTime())
            }
            _getStyles() {
                let e = {
                        0: {
                            borderColor: "#0a1b53",
                            gradient: "#2b3c84, #0c1b52",
                            fontColor: "#fff"
                        },
                        2: {
                            borderColor: "#010101",
                            gradient: "#111312, #010101",
                            fontColor: "#fff"
                        },
                        3: {
                            borderColor: "#F36729",
                            gradient: "#F79220, #F26B29",
                            fontColor: "#fff"
                        }
                    },
                    i = (typeof e[0] < "u", e[0]),
                    o = ".MarketGidDButton" + 1435486 + "{display:       inline-block;";
                return o += 'width:     170px !important;height:        50px !important;line-height:        50px !important;background-color: RGBA(0,0,0,0);border:        1px solid white;border-radius:        3px;color:         white !important;font:          normal 500 18px/50px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);', o += "text-align:    center;position: absolute;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;margin: auto !important;text-decoration: none !important;transition:all 1s;}.MarketGidDLayout" + 1435486 + "{height: 100%;width: 100% !important;position: absolute !important;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 99999;}#MarketGidComposite" + 1435486 + " .mgline {position:relative}", o
            }
        }
    });
    var Vi = {};
    ft(Vi, {
        UtilsBlock: () => me
    });
    var me, qi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        me = class extends $ {
            constructor(e) {
                super(e), this.isMobileResult = null, this.hasConsents = !1, this.name = "UtilsBlock"
            }
            getScroll() {
                let e = this.getWindow();
                return {
                    top: e.document.body.scrollTop || e.document.documentElement.scrollTop || 0,
                    left: e.document.body.scrollLeft || e.document.documentElement.scrollLeft || 0
                }
            }
            getViewportSize() {
                let e = this.getWindow();
                return {
                    width: e.innerWidth || e.document.documentElement.clientWidth,
                    height: e.innerHeight || e.document.documentElement.clientHeight
                }
            }
            getRect(e, i) {
                let o = e.getBoundingClientRect(),
                    p = {
                        top: o.top,
                        bottom: o.bottom,
                        left: o.left,
                        right: o.right,
                        height: o.height ? o.height : o.bottom - o.top,
                        width: o.width ? o.width : o.right - o.left
                    };
                if (this.app.context.self !== this.app.context.top) {
                    let c = this.getFrame();
                    if (c) {
                        let w = c.getBoundingClientRect();
                        p.top += w.top, p.bottom += w.top, p.left += w.left, p.right += w.left
                    }
                }
                if (i) {
                    let c = this.getScroll();
                    p.top += c.top, p.bottom += c.top, p.left += c.left, p.right += c.left
                }
                return p
            }
            getWindow() {
                let e;
                if (typeof e > "u") {
                    let i = this.app.context;
                    if (this.app.context.parent != this.app.context.self) try {
                        typeof this.app.context.top.document < "u" && (i = this.app.context.top)
                    } catch {}
                    e = i
                }
                return e
            }
            getFrame() {
                let e;
                try {
                    let i;
                    for (let o = this.app.context; o.frameElement; o = o.parent) i = o.frameElement;
                    e = i
                } catch {
                    e = null
                }
                return e
            }
            isMobile() {
                if (this.isMobileResult === null) {
                    let e = !1;
                    (function(i) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0, 4))) && (e = !0)
                    })(navigator.userAgent || navigator.vendor || window.opera), this.isMobileResult = e
                }
                return this.isMobileResult
            }
            isTablet() {
                let e = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
                return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(e)
            }
            generateHash() {
                return Date.now().toString(36) + Math.random().toString(36).substring(2)
            }
            isChromeWebView() {
                let e = ["WebView", "Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})", "Linux; U; Android"],
                    i = new RegExp("(" + e.join("|") + ")", "ig");
                return !!navigator.userAgent.match(i)
            }
            hasStorageConsents() {
                if (!this.hasConsents) {
                    let e = this.app.getMostTopWindow();
                    try {
                        e.localStorage && (this.hasConsents = !!e.localStorage.getItem("MG_tcfv2Data"))
                    } catch {}
                }
                return this.hasConsents
            }
        }
    });
    var Fi = {};
    ft(Fi, {
        ExternalCountersBlock: () => xe
    });
    var xe, ji = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        xe = class extends $ {
            constructor(e) {
                super(e), this.name = "ExternalCountersBlock", this.app.externalCountersLinkHandler = this._externalCountersLinkHandler.bind(this), this._handleExternalCountersListener()
            }
            _externalCountersLinkHandler(e) {
                let i = e.getAttribute("data-hash");
                if (Array.isArray(this.app.teaserData[i].clicktrackers)) {
                    let o = this.app.teaserData[i].clicktrackers;
                    if (o.length)
                        for (let p = 0; p < o.length; p++) this.app.request.pixel(`clickTracker ${i} - ${o[p]}`, o[p], {}, {})
                }
                return !0
            }
            _handleExternalCountersListener() {
                this.app.addClickHandler(this.app.clickHandlerList.externalCountersLink.handler, this.app.clickHandlerList.externalCountersLink.priority)
            }
        }
    });
    var $i = {};
    ft($i, {
        AmpRenderBlock: () => we
    });
    var we, Ui = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        we = class extends $ {
            constructor(e) {
                super(e), this.name = "AmpRenderBlock", this.ampResized = [], this.app.isAmp() && (this.addHook("afterInitHooks", this._ampRenderStart), this.addHook("afterLoadNewsHooks", this._ampResizeHook), this.addHook("beforeInitHooks", this._ampPageView, 1e4), this.addHook("beforePrepareCappingDataHooks", this._ampPageImp, 1e4))
            }
            _ampRenderStart() {
                this.app.context.context.renderStart({
                    width: this.app.precalcRect.width,
                    height: this.app.precalcRect.height
                })
            }
            _ampPageView(e) {
                typeof this.app.context.context.computeInMasterFrame < "u" ? this.app.context.context.computeInMasterFrame(this.app.context, "_mgPageViewAmp" + 872416, i => {
                    let o = this.app.context.context.pageViewId,
                        p = localStorage.getItem("_mgPageViewAmpId" + 872416) ? localStorage.getItem("_mgPageViewAmpId" + 872416) : "";
                    if (o === p) {
                        let c = this.app.getMostTopWindow();
                        c["_mgPageView" + 872416] = c["_mgPageView" + 872416] || [], c["_mgPageView" + 872416].push(c.location.pathname), c["_mgPageViewEndPoint" + 872416] = c["_mgPageViewEndPoint" + 872416] || [], c["_mgPageViewEndPoint" + 872416].push(c.location.pathname), this.app.initServicerRequest = !1
                    }
                    localStorage.setItem("_mgPageViewAmpId" + 872416, o), i()
                }, () => {}) : e()
            }
            _ampPageImp(e) {
                typeof this.app.context.context.computeInMasterFrame < "u" ? this.app.context.context.computeInMasterFrame(this.app.context, "_mgPageImpAmp" + 872416, i => {
                    let o = this.app.context.context.pageViewId,
                        p = localStorage.getItem("_mgPageImpAmpId" + 872416) ? localStorage.getItem("_mgPageImpAmpId" + 872416) : "";
                    if (o === p) {
                        let c = this.app.getMostTopWindow();
                        c["_mgPageImp" + 872416] = c["_mgPageImp" + 872416] || [], c["_mgPageImp" + 872416].push(c.location.pathname)
                    }
                    localStorage.setItem("_mgPageImpAmpId" + 872416, o), i()
                }, () => {}) : e()
            }
            _askAmpForResize() {
                let e = this.app.root.getBoundingClientRect();
                this.app.context.context.requestResize(e.width, e.height).then(() => {
                    this.ampResizeDenied = !1, this._updateSizeStatement(e.width, e.height)
                }, () => {
                    this.ampResizeDenied = !0
                })
            }
            _ampResizeHook() {
                setTimeout(() => {
                    this._askAmpForResize()
                }, 100), typeof this.ampResizeInterval > "u" && (this.ampResizeInterval = setInterval(() => {
                    let e = this.app.root.getBoundingClientRect();
                    typeof this.ampResizeDenied < "u" && this.ampResizeDenied ? this._askAmpForResize() : (Math.floor(e.width) !== this.ampResized.width || Math.floor(e.height) !== this.ampResized.height) && this._askAmpForResize()
                }, 100))
            }
            _updateSizeStatement(e, i) {
                this.ampResized.width = e, this.ampResized.height = i
            }
        }
    });
    var Xi = {};
    ft(Xi, {
        VideoMetricsBlock: () => be
    });
    var be, Yi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        be = class extends $ {
            constructor(e) {
                super(e), this.name = "VideoMetricsBlock", this.userAgent = this.app.context.navigator.userAgent, this.exceptionAgentList = ["Zalo iOS"], this.videoType = "video/mp4", this.VIDEO = new Blob([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], {
                    type: this.videoType
                }), this.siteBody = this.app.getMostTopWindow().document.body, this._playVideos = this._playVideos.bind(this), this.addHook("beforeLoadNewsHooks", this._setVideoStyles), this.addHook("afterLoadNewsHooks", this._playVideos)
            }
            _setVideoStyles() {
                let e = ".mgbox * { -webkit-transition: all .25s; -moz-transition: all .25s; -ms-transition: all .25s; -o-transition: all .25s; transition: all .25s; } .mgbox { padding: 0 !important; position: relative !important; text-align: center; vertical-align: top !important; margin: 0 auto; border-style: none; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; line-height: 100% !important; transition: none !important; box-sizing: border-box; width: 100%; max-width: 680px; font-family: Arial; } .mgheader { border-bottom: 1px solid #ccc !important; padding-bottom: 3px; margin-bottom: 10px; } .mgheader div a { position: relative; top: -5px; } .mgheader div img { position: relative; top: 5px; height: 27px; } .mghead { color: #333; font-size: 17px; line-height: 1.2; text-transform: uppercase !important; margin: 5px 0 0 0 !important; font-family: Arial; font-weight: 400; } .mgline { background: transparent; cursor: pointer; display: inline-block; _overflow: hidden; *zoom: 1; *display: inline; border: none; box-sizing: border-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; word-wrap: break-word; vertical-align: top; position: relative; margin-bottom: 5px; } .mgline .allink { height: 100%; width: 100%; display: block; position: absolute; cursor: pointer; z-index: 999; } .mgline .image-with-text { width: 100% !important; height: auto; max-width: 100%; margin: 0 auto; position: relative; } .mgline .image-container { position: relative; } div.mcimg { padding: 0; text-align: center; display: block !important; } .mgline:hover:not(.vrline) div.mcimg { opacity: 0.8 !important; } img.mcimg { border-style: none; width: 100%; height: auto !important; max-width: 680px; max-height: 385px; box-sizing: border-box; display: block; margin: 0; } .mgline .text-elements { padding-top: 10px; } .text-elements a { text-decoration: none; } .mgline .text_on_hover a { top: 0; left: 0; } .mctitle { text-align: left; } .mctitle a { font-family: Arial; font-weight: bold; font-size: 20px; line-height: 22px; font-style: normal; text-decoration: none; color: #333; letter-spacing: -0.4px; } .mgline:hover .mctitle a { color: #0F4B81; text-decoration: none; } .mcdesc { display: none; text-align: left; } .mcdesc a { font-family: Arial; font-weight: normal; font-size: 16px; line-height: 20px; font-style: normal; text-decoration: none; color: #a9a9a9; } .mcdomain { display: block; text-align: left; margin-top: 10px; } .mcdomain a { font-family: Arial; font-weight: 400; font-size: 17px; line-height: 16px; font-style: normal; text-decoration: none; color: #A9A9A9; display: block; overflow: hidden; text-transform: uppercase; letter-spacing: 0.85px; } @supports not (flex-wrap: wrap) { .mgbox { display: block !important; } .mgline { display: inline-block !important; } } img.mcimgad { position: absolute; bottom: 0; right: 0; z-index: 10; opacity: 0.7; width: 20px; height: 20px; } .mgbox .row1, .mgbox .row2 { display: flex; flex-direction: row; flex-wrap: wrap; width: 100%; max-width: 100%; position: relative; margin: 0 0 5px !important; } .mgbox .row1 .mgline { width: 100%; max-width: 100%; } .row1 .mgline img.mcimgad { left: 0; } .row1 .mgline .text_on_hover { padding: 0 0 10px; z-index: 10; } .row1 .mgline .mcdesc { margin-top: 10px; } .row1 .mgline .image-container:before { content: \\'\\'; display: inline-block; position: absolute; left: 0 !important; width: 100%; height: 100%; z-index: 10; } .mgbox .row2 .mgline { width: 49.5%; max-width: 49.5%; } .row2 .mgline .text_on_hover { padding: 0 0 10px; z-index: 10; } .row2 .mgline .mcdesc { margin-top: 5px; max-height: 32px; overflow: hidden; } .row2 .mgline .image-container:before { content: \\'\\'; display: inline-block; position: absolute; left: 0 !important; width: 100%; height: 100%; z-index: 10; } .row2 .mgline:first-child { margin-right: 1%; } .row2 .mgline .mctitle { margin-bottom: 5px !important; } .row2 .mgline .mcdesc { display: none !important; } @media (max-width: 480px) { .row1 .mgline:not(.vrline) div.mcimg { float: none; width: 100%; } .row1 .mgline div.mcimg { float: none; width: 100%; } .row1 .mgline img.mcimgad { left: inherit; } .row1 .mgline .text-elements { width: 100% !important; bottom: 0 !important; } .row1 .mgline .text_on_hover { width: auto; height: auto; } .row1 .mgline .mcdesc { margin-top: 5px; max-height: 32px; overflow: hidden; } .row2 .mgline { width: 100% !important; max-width: 100% !important; } .row2 .mgline:first-child { width: 100%; margin-right: 0; max-width: 100% !important; } .mctitle, .mcdesc { width: 100% !important; } .mctitle, .mcdesc { text-align: left !important; } .mgline { overflow: hidden; } .mghead { font-size: 15px; } .mgheader div img { max-height: 24px; } .mctitle a { font-size: 18px; line-height: 19px; letter-spacing: -0.2px; } .mcdomain a { font-size: 12px; line-height: 12px; } .mcdomain { margin-top: 5px; } } .mgbox .row2 .mgline { display: block; } ";
                e = e.split("img.mcimg {").filter((i, o) => o !== 0).map(i => i.substring(0, i.indexOf("}"))).join("").trim(), this.app.stylesheetsBlock.add("new-mcvideo-styles", `.mgline video.mcvideo {${e}}`)
            }
            _playVideos() {
                let e = this.app.root.getElementsByClassName("mcvideo");
                for (let i = 0; i < e.length; i++) {
                    let o = e[i],
                        p = () => {
                            if (o.classList.contains("played")) this.siteBody.removeEventListener("pointerdown", p);
                            else {
                                let c = o.play();
                                typeof c < "u" && c.catch(w => {
                                    this.app.log("_playVideosHandler. Error: ", "error", w), o.controls = "true"
                                })
                            }
                        };
                    this.siteBody.addEventListener("pointerdown", p, !1)
                }
            }
            waitForCollectMetrics() {
                return new Promise(e => {
                    let i = 0;
                    if (this._isIosWebview() && this._isExceptionAgent()) {
                        this.app.requestParams.mp4 = "mp4=" + i, this.app.requestParams.ap = "ap=" + 0, e();
                        return
                    }
                    let o = this.app.context.document.createElement("video");
                    if (o.muted = "true", o.autoplay = "true", o.loop = "true", o.setAttribute("playsinline", ""), o.setAttribute("webkit-playsinline", ""), o.src = URL.createObjectURL(this.VIDEO), typeof o.canPlayType < "u") {
                        let c = o.canPlayType(this.videoType);
                        (c == "maybe" || c == "probably") && (i = 1)
                    }
                    this.app.requestParams.mp4 = "mp4=" + i;
                    let p = o.play();
                    typeof p < "u" ? p.then(() => {
                        this.app.requestParams.ap = "ap=" + 1, o.src = "", typeof o.remove < "u" && o.remove(), e()
                    }).catch(c => {
                        this.app.requestParams.ap = "ap=" + 0, o.src = "", typeof o.remove < "u" && o.remove(), this.app.log("VideoMetricsBlock: waitForCollectMetrics. Error: ", "error", c), e()
                    }) : (this.app.requestParams.ap = "ap=" + 0, o.src = "", typeof o.remove < "u" && o.remove(), this.app.log("VideoMetricsBlock. Promise in play method is not supported.", "error"), e())
                })
            }
            _isIosWebview() {
                return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(this.userAgent)
            }
            _isExceptionAgent() {
                return this.exceptionAgentList.some(e => this.userAgent.indexOf(e) !== -1)
            }
        }
    });
    var Ji = {};
    ft(Ji, {
        OriginTrialsBlock: () => ke
    });
    var ke, Zi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        ke = class extends $ {
            constructor(e) {
                super(e), this.name = "OriginTrialsBlock", this.addHook("beforeInitHooks", this.initOriginTrials)
            }
            initOriginTrials() {
                JSON.parse('[{"name":"X-Requested-With Trial. servicer.mgid.com","token":"A00OovyFoivp5xgE074+G3hiIk00oBqovMlZYlJd\\/gVpyF7t0vfq+2flpGTOUtezADAnKew0nlBFSAmijsLtlA0AAAB\\/eyJvcmlnaW4iOiJodHRwczovL3NlcnZpY2VyLm1naWQuY29tOjQ0MyIsImZlYXR1cmUiOiJXZWJWaWV3WFJlcXVlc3RlZFdpdGhEZXByZWNhdGlvbiIsImV4cGlyeSI6MTcxOTUzMjc5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","conditions":["webview"]},{"name":"X-Requested-With Trial. c.mgid.com","token":"A\\/TuIKGyAWlQptIROuEuX1RnZ8F17uxV+uDuQibYYFbe\\/jXBHbZzB7O0PR8NqtkSskdPP45qEu6GRs9oAMQXUgsAAAB4eyJvcmlnaW4iOiJodHRwczovL2MubWdpZC5jb206NDQzIiwiZmVhdHVyZSI6IldlYlZpZXdYUmVxdWVzdGVkV2l0aERlcHJlY2F0aW9uIiwiZXhwaXJ5IjoxNzE5NTMyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9","conditions":["webview"]}]').forEach(i => {
                    if (i.conditions.indexOf("webview") !== -1 && !this.app.utils.isChromeWebView()) return;
                    let o = this.app.context.document.createElement("META");
                    o.httpEquiv = "origin-trial", o.content = i.token, this.app.context.document.head.append(o), this.app.log("Origin Trial Token inserted: " + i.name)
                })
            }
        }
    });
    var Ki = {};
    ft(Ki, {
        ElasticBlock: () => ye
    });
    var ye, Qi = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        ye = class extends $ {
            constructor(e) {
                super(e), this.elasticShown = 0, this.isElastic = !0, this.elasticIterations = 0, this.isElasticRendering = !1, this.hasAdblock = !1, this.elasticPage = 1, this.name = "ElasticBlock", this.app.pageUnlim = 0, this.requestsLimitOptions = JSON.parse("{}"), this.isRequestsLimitEnabled = !!Object.keys(this.requestsLimitOptions).length, this.isRequestsLimitEnabled && (this.countNews = this.app.getExpectedCountNews(), this.renderedCountNews = this.countNews, this.limitDeskCountNews = this.requestsLimitOptions?.limitDesktop, this.limitMobCountNews = this.requestsLimitOptions?.limitMobile || this.requestsLimitOptions?.limitDesktop), this.addHook("afterInitHooks", this.app.resetPage), this.addHook("afterLoadNewsHooks", this.load)
            }
            load() {
                this.isElasticRendering = !1, this.intersectionObserverIsAvailable() ? this.useIntersectionObserver() : this.useTimeout(), this.app.getInternalIds().length != 0 && (this.app.requestParams.viewedInternalIds = "exclude_int_exchange=" + this.app.getInternalIds().join(","))
            }
            intersectionObserverIsAvailable() {
                return typeof IntersectionObserver == "function"
            }
            useIntersectionObserver() {
                let e = this.app.root.querySelectorAll(".mgbox");
                if (!e.length) return;
                let i = e[e.length - 1];
                for (let p = i.childNodes.length - 1; p--; p >= 0)
                    if (i.childNodes[p] instanceof HTMLElement) {
                        i = i.childNodes[p];
                        break
                    } new IntersectionObserver(p => {
                    p[0].intersectionRatio > .6 && this.elasticTest()
                }, {
                    threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                }).observe(i)
            }
            useTimeout() {
                let e = 500;
                this.app.context.setTimeout(this.elasticTest.bind(this), e), this.elasticShown++
            }
            elasticTest() {
                let e = this.app.getPageCount();
                this.app.iteration = 1, this.app.pageUnlim != -1 && !this.hasAdblock && (this.testHeight() && !this.isElasticRendering ? (this.app.page = this.app.page < this.app.getPageCount() ? this.app.page + 1 : 1, this.isElasticRendering = !0, this.app.injectScript(!1, 2), this.elasticIterations++ > e && (this.app.pageUnlim = -1)) : this.intersectionObserverIsAvailable() || this.app.context.setTimeout(this.elasticTest.bind(this), 300))
            }
            addLimitads() {
                let e;
                this.app.utils.isMobile() ? e = this.limitMobCountNews - this.renderedCountNews : e = this.limitDeskCountNews - this.renderedCountNews, e >= this.countNews ? this.renderedCountNews = this.renderedCountNews + this.countNews : e === 0 ? this.elasticPage++ : this.app.requestParams.limitads = `limitads=${e}`
            }
            testHeight() {
                let e = this.app.getViewportHeight().c + 600;
                if (this.app.isAmp()) {
                    let i = this.app.context["boundingClientRect" + 1435486 + "_" + this.app.uniqId],
                        o = i || this.app.context["boundingClientRect" + 1435486];
                    return e > o.bottom && !this.app.ampResizeDenied
                }
                return e > this.app.root.getBoundingClientRect().bottom
            }
        }
    });
    var Ct, ts = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        Ct = function(D, e) {
            var i = {},
                o = i.lib = {},
                p = function() {},
                c = o.Base = {
                    extend: function(u) {
                        p.prototype = this;
                        var T = new p;
                        return u && T.mixIn(u), T.hasOwnProperty("init") || (T.init = function() {
                            T.$super.init.apply(this, arguments)
                        }), T.init.prototype = T, T.$super = this, T
                    },
                    create: function() {
                        var u = this.extend();
                        return u.init.apply(u, arguments), u
                    },
                    init: function() {},
                    mixIn: function(u) {
                        for (var T in u) u.hasOwnProperty(T) && (this[T] = u[T]);
                        u.hasOwnProperty("toString") && (this.toString = u.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                },
                w = o.WordArray = c.extend({
                    init: function(u, T) {
                        u = this.words = u || [], this.sigBytes = T != e ? T : 4 * u.length
                    },
                    toString: function(u) {
                        return (u || h).stringify(this)
                    },
                    concat: function(u) {
                        var T = this.words,
                            E = u.words,
                            W = this.sigBytes;
                        if (u = u.sigBytes, this.clamp(), W % 4)
                            for (var S = 0; S < u; S++) T[W + S >>> 2] |= (E[S >>> 2] >>> 24 - 8 * (S % 4) & 255) << 24 - 8 * ((W + S) % 4);
                        else if (65535 < E.length)
                            for (S = 0; S < u; S += 4) T[W + S >>> 2] = E[S >>> 2];
                        else T.push.apply(T, E);
                        return this.sigBytes += u, this
                    },
                    clamp: function() {
                        var u = this.words,
                            T = this.sigBytes;
                        u[T >>> 2] &= 4294967295 << 32 - 8 * (T % 4), u.length = D.ceil(T / 4)
                    },
                    clone: function() {
                        var u = c.clone.call(this);
                        return u.words = this.words.slice(0), u
                    },
                    random: function(u) {
                        for (var T = [], E = 0; E < u; E += 4) T.push(4294967296 * D.random() | 0);
                        return new w.init(T, u)
                    }
                }),
                k = i.enc = {},
                h = k.Hex = {
                    stringify: function(u) {
                        var T = u.words;
                        u = u.sigBytes;
                        for (var E = [], W = 0; W < u; W++) {
                            var S = T[W >>> 2] >>> 24 - 8 * (W % 4) & 255;
                            E.push((S >>> 4).toString(16)), E.push((S & 15).toString(16))
                        }
                        return E.join("")
                    },
                    parse: function(u) {
                        for (var T = u.length, E = [], W = 0; W < T; W += 2) E[W >>> 3] |= parseInt(u.substr(W, 2), 16) << 24 - 4 * (W % 8);
                        return new w.init(E, T / 2)
                    }
                },
                y = k.Latin1 = {
                    stringify: function(u) {
                        var T = u.words;
                        u = u.sigBytes;
                        for (var E = [], W = 0; W < u; W++) E.push(String.fromCharCode(T[W >>> 2] >>> 24 - 8 * (W % 4) & 255));
                        return E.join("")
                    },
                    parse: function(u) {
                        for (var T = u.length, E = [], W = 0; W < T; W++) E[W >>> 2] |= (u.charCodeAt(W) & 255) << 24 - 8 * (W % 4);
                        return new w.init(E, T)
                    }
                },
                b = k.Utf8 = {
                    stringify: function(u) {
                        try {
                            return decodeURIComponent(escape(y.stringify(u)))
                        } catch {
                            throw Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(u) {
                        return y.parse(unescape(encodeURIComponent(u)))
                    }
                },
                d = o.BufferedBlockAlgorithm = c.extend({
                    reset: function() {
                        this._data = new w.init, this._nDataBytes = 0
                    },
                    _append: function(u) {
                        typeof u == "string" && (u = b.parse(u)), this._data.concat(u), this._nDataBytes += u.sigBytes
                    },
                    _process: function(u) {
                        var T = this._data,
                            E = T.words,
                            W = T.sigBytes,
                            S = this.blockSize,
                            C = W / (4 * S),
                            C = u ? D.ceil(C) : D.max((C | 0) - this._minBufferSize, 0);
                        if (u = C * S, W = D.min(4 * u, W), u) {
                            for (var R = 0; R < u; R += S) this._doProcessBlock(E, R);
                            R = E.splice(0, u), T.sigBytes -= W
                        }
                        return new w.init(R, W)
                    },
                    clone: function() {
                        var u = c.clone.call(this);
                        return u._data = this._data.clone(), u
                    },
                    _minBufferSize: 0
                });
            o.Hasher = d.extend({
                cfg: c.extend(),
                init: function(u) {
                    this.cfg = this.cfg.extend(u), this.reset()
                },
                reset: function() {
                    d.reset.call(this), this._doReset()
                },
                update: function(u) {
                    return this._append(u), this._process(), this
                },
                finalize: function(u) {
                    return u && this._append(u), this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(u) {
                    return function(T, E) {
                        return new u.init(E).finalize(T)
                    }
                },
                _createHmacHelper: function(u) {
                    return function(T, E) {
                        return new I.HMAC.init(u, E).finalize(T)
                    }
                }
            });
            var I = i.algo = {};
            return i
        }(Math);
        (function() {
            var D = Ct,
                e = D.lib.WordArray;
            D.enc.Base64 = {
                stringify: function(i) {
                    var o = i.words,
                        p = i.sigBytes,
                        c = this._map;
                    i.clamp(), i = [];
                    for (var w = 0; w < p; w += 3)
                        for (var k = (o[w >>> 2] >>> 24 - 8 * (w % 4) & 255) << 16 | (o[w + 1 >>> 2] >>> 24 - 8 * ((w + 1) % 4) & 255) << 8 | o[w + 2 >>> 2] >>> 24 - 8 * ((w + 2) % 4) & 255, h = 0; 4 > h && w + .75 * h < p; h++) i.push(c.charAt(k >>> 6 * (3 - h) & 63));
                    if (o = c.charAt(64))
                        for (; i.length % 4;) i.push(o);
                    return i.join("")
                },
                parse: function(i) {
                    var o = i.length,
                        p = this._map,
                        c = p.charAt(64);
                    c && (c = i.indexOf(c), c != -1 && (o = c));
                    for (var c = [], w = 0, k = 0; k < o; k++)
                        if (k % 4) {
                            var h = p.indexOf(i.charAt(k - 1)) << 2 * (k % 4),
                                y = p.indexOf(i.charAt(k)) >>> 6 - 2 * (k % 4);
                            c[w >>> 2] |= (h | y) << 24 - 8 * (w % 4), w++
                        } return e.create(c, w)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        })();
        (function(D) {
            function e(d, I, u, T, E, W, S) {
                return d = d + (I & u | ~I & T) + E + S, (d << W | d >>> 32 - W) + I
            }

            function i(d, I, u, T, E, W, S) {
                return d = d + (I & T | u & ~T) + E + S, (d << W | d >>> 32 - W) + I
            }

            function o(d, I, u, T, E, W, S) {
                return d = d + (I ^ u ^ T) + E + S, (d << W | d >>> 32 - W) + I
            }

            function p(d, I, u, T, E, W, S) {
                return d = d + (u ^ (I | ~T)) + E + S, (d << W | d >>> 32 - W) + I
            }
            for (var c = Ct, h = c.lib, w = h.WordArray, k = h.Hasher, h = c.algo, y = [], b = 0; 64 > b; b++) y[b] = 4294967296 * D.abs(D.sin(b + 1)) | 0;
            h = h.MD5 = k.extend({
                _doReset: function() {
                    this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(d, I) {
                    for (var u = 0; 16 > u; u++) {
                        var T = I + u,
                            E = d[T];
                        d[T] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360
                    }
                    var u = this._hash.words,
                        T = d[I + 0],
                        E = d[I + 1],
                        W = d[I + 2],
                        S = d[I + 3],
                        C = d[I + 4],
                        R = d[I + 5],
                        et = d[I + 6],
                        mt = d[I + 7],
                        wt = d[I + 8],
                        lt = d[I + 9],
                        ht = d[I + 10],
                        ut = d[I + 11],
                        bt = d[I + 12],
                        xt = d[I + 13],
                        gt = d[I + 14],
                        kt = d[I + 15],
                        F = u[0],
                        Z = u[1],
                        j = u[2],
                        tt = u[3],
                        F = e(F, Z, j, tt, T, 7, y[0]),
                        tt = e(tt, F, Z, j, E, 12, y[1]),
                        j = e(j, tt, F, Z, W, 17, y[2]),
                        Z = e(Z, j, tt, F, S, 22, y[3]),
                        F = e(F, Z, j, tt, C, 7, y[4]),
                        tt = e(tt, F, Z, j, R, 12, y[5]),
                        j = e(j, tt, F, Z, et, 17, y[6]),
                        Z = e(Z, j, tt, F, mt, 22, y[7]),
                        F = e(F, Z, j, tt, wt, 7, y[8]),
                        tt = e(tt, F, Z, j, lt, 12, y[9]),
                        j = e(j, tt, F, Z, ht, 17, y[10]),
                        Z = e(Z, j, tt, F, ut, 22, y[11]),
                        F = e(F, Z, j, tt, bt, 7, y[12]),
                        tt = e(tt, F, Z, j, xt, 12, y[13]),
                        j = e(j, tt, F, Z, gt, 17, y[14]),
                        Z = e(Z, j, tt, F, kt, 22, y[15]),
                        F = i(F, Z, j, tt, E, 5, y[16]),
                        tt = i(tt, F, Z, j, et, 9, y[17]),
                        j = i(j, tt, F, Z, ut, 14, y[18]),
                        Z = i(Z, j, tt, F, T, 20, y[19]),
                        F = i(F, Z, j, tt, R, 5, y[20]),
                        tt = i(tt, F, Z, j, ht, 9, y[21]),
                        j = i(j, tt, F, Z, kt, 14, y[22]),
                        Z = i(Z, j, tt, F, C, 20, y[23]),
                        F = i(F, Z, j, tt, lt, 5, y[24]),
                        tt = i(tt, F, Z, j, gt, 9, y[25]),
                        j = i(j, tt, F, Z, S, 14, y[26]),
                        Z = i(Z, j, tt, F, wt, 20, y[27]),
                        F = i(F, Z, j, tt, xt, 5, y[28]),
                        tt = i(tt, F, Z, j, W, 9, y[29]),
                        j = i(j, tt, F, Z, mt, 14, y[30]),
                        Z = i(Z, j, tt, F, bt, 20, y[31]),
                        F = o(F, Z, j, tt, R, 4, y[32]),
                        tt = o(tt, F, Z, j, wt, 11, y[33]),
                        j = o(j, tt, F, Z, ut, 16, y[34]),
                        Z = o(Z, j, tt, F, gt, 23, y[35]),
                        F = o(F, Z, j, tt, E, 4, y[36]),
                        tt = o(tt, F, Z, j, C, 11, y[37]),
                        j = o(j, tt, F, Z, mt, 16, y[38]),
                        Z = o(Z, j, tt, F, ht, 23, y[39]),
                        F = o(F, Z, j, tt, xt, 4, y[40]),
                        tt = o(tt, F, Z, j, T, 11, y[41]),
                        j = o(j, tt, F, Z, S, 16, y[42]),
                        Z = o(Z, j, tt, F, et, 23, y[43]),
                        F = o(F, Z, j, tt, lt, 4, y[44]),
                        tt = o(tt, F, Z, j, bt, 11, y[45]),
                        j = o(j, tt, F, Z, kt, 16, y[46]),
                        Z = o(Z, j, tt, F, W, 23, y[47]),
                        F = p(F, Z, j, tt, T, 6, y[48]),
                        tt = p(tt, F, Z, j, mt, 10, y[49]),
                        j = p(j, tt, F, Z, gt, 15, y[50]),
                        Z = p(Z, j, tt, F, R, 21, y[51]),
                        F = p(F, Z, j, tt, bt, 6, y[52]),
                        tt = p(tt, F, Z, j, S, 10, y[53]),
                        j = p(j, tt, F, Z, ht, 15, y[54]),
                        Z = p(Z, j, tt, F, E, 21, y[55]),
                        F = p(F, Z, j, tt, wt, 6, y[56]),
                        tt = p(tt, F, Z, j, kt, 10, y[57]),
                        j = p(j, tt, F, Z, et, 15, y[58]),
                        Z = p(Z, j, tt, F, xt, 21, y[59]),
                        F = p(F, Z, j, tt, C, 6, y[60]),
                        tt = p(tt, F, Z, j, ut, 10, y[61]),
                        j = p(j, tt, F, Z, W, 15, y[62]),
                        Z = p(Z, j, tt, F, lt, 21, y[63]);
                    u[0] = u[0] + F | 0, u[1] = u[1] + Z | 0, u[2] = u[2] + j | 0, u[3] = u[3] + tt | 0
                },
                _doFinalize: function() {
                    var d = this._data,
                        I = d.words,
                        u = 8 * this._nDataBytes,
                        T = 8 * d.sigBytes;
                    I[T >>> 5] |= 128 << 24 - T % 32;
                    var E = D.floor(u / 4294967296);
                    for (I[(T + 64 >>> 9 << 4) + 15] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, I[(T + 64 >>> 9 << 4) + 14] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, d.sigBytes = 4 * (I.length + 1), this._process(), d = this._hash, I = d.words, u = 0; 4 > u; u++) T = I[u], I[u] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360;
                    return d
                },
                clone: function() {
                    var d = k.clone.call(this);
                    return d._hash = this._hash.clone(), d
                }
            }), c.MD5 = k._createHelper(h), c.HmacMD5 = k._createHmacHelper(h)
        })(Math);
        (function() {
            var D = Ct,
                o = D.lib,
                e = o.Base,
                i = o.WordArray,
                o = D.algo,
                p = o.EvpKDF = e.extend({
                    cfg: e.extend({
                        keySize: 4,
                        hasher: o.MD5,
                        iterations: 1
                    }),
                    init: function(c) {
                        this.cfg = this.cfg.extend(c)
                    },
                    compute: function(c, w) {
                        for (var d = this.cfg, k = d.hasher.create(), h = i.create(), y = h.words, b = d.keySize, d = d.iterations; y.length < b;) {
                            I && k.update(I);
                            var I = k.update(c).finalize(w);
                            k.reset();
                            for (var u = 1; u < d; u++) I = k.finalize(I), k.reset();
                            h.concat(I)
                        }
                        return h.sigBytes = 4 * b, h
                    }
                });
            D.EvpKDF = function(c, w, k) {
                return p.create(k).compute(c, w)
            }
        })();
        Ct.lib.Cipher || function(D) {
            var u = Ct,
                e = u.lib,
                i = e.Base,
                o = e.WordArray,
                p = e.BufferedBlockAlgorithm,
                c = u.enc.Base64,
                w = u.algo.EvpKDF,
                k = e.Cipher = p.extend({
                    cfg: i.extend(),
                    createEncryptor: function(E, W) {
                        return this.create(this._ENC_XFORM_MODE, E, W)
                    },
                    createDecryptor: function(E, W) {
                        return this.create(this._DEC_XFORM_MODE, E, W)
                    },
                    init: function(E, W, S) {
                        this.cfg = this.cfg.extend(S), this._xformMode = E, this._key = W, this.reset()
                    },
                    reset: function() {
                        p.reset.call(this), this._doReset()
                    },
                    process: function(E) {
                        return this._append(E), this._process()
                    },
                    finalize: function(E) {
                        return E && this._append(E), this._doFinalize()
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function(E) {
                        return {
                            encrypt: function(W, S, C) {
                                return (typeof S == "string" ? T : I).encrypt(E, W, S, C)
                            },
                            decrypt: function(W, S, C) {
                                return (typeof S == "string" ? T : I).decrypt(E, W, S, C)
                            }
                        }
                    }
                });
            e.StreamCipher = k.extend({
                _doFinalize: function() {
                    return this._process(!0)
                },
                blockSize: 1
            });
            var d = u.mode = {},
                h = function(E, W, S) {
                    var C = this._iv;
                    C ? this._iv = D : C = this._prevBlock;
                    for (var R = 0; R < S; R++) E[W + R] ^= C[R]
                },
                y = (e.BlockCipherMode = i.extend({
                    createEncryptor: function(E, W) {
                        return this.Encryptor.create(E, W)
                    },
                    createDecryptor: function(E, W) {
                        return this.Decryptor.create(E, W)
                    },
                    init: function(E, W) {
                        this._cipher = E, this._iv = W
                    }
                })).extend();
            y.Encryptor = y.extend({
                processBlock: function(E, W) {
                    var S = this._cipher,
                        C = S.blockSize;
                    h.call(this, E, W, C), S.encryptBlock(E, W), this._prevBlock = E.slice(W, W + C)
                }
            }), y.Decryptor = y.extend({
                processBlock: function(E, W) {
                    var S = this._cipher,
                        C = S.blockSize,
                        R = E.slice(W, W + C);
                    S.decryptBlock(E, W), h.call(this, E, W, C), this._prevBlock = R
                }
            }), d = d.CBC = y, y = (u.pad = {}).Pkcs7 = {
                pad: function(E, W) {
                    for (var S = 4 * W, S = S - E.sigBytes % S, C = S << 24 | S << 16 | S << 8 | S, R = [], et = 0; et < S; et += 4) R.push(C);
                    S = o.create(R, S), E.concat(S)
                },
                unpad: function(E) {
                    E.sigBytes -= E.words[E.sigBytes - 1 >>> 2] & 255
                }
            }, e.BlockCipher = k.extend({
                cfg: k.cfg.extend({
                    mode: d,
                    padding: y
                }),
                reset: function() {
                    k.reset.call(this);
                    var W = this.cfg,
                        E = W.iv,
                        W = W.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE) var S = W.createEncryptor;
                    else S = W.createDecryptor, this._minBufferSize = 1;
                    this._mode = S.call(W, this, E && E.words)
                },
                _doProcessBlock: function(E, W) {
                    this._mode.processBlock(E, W)
                },
                _doFinalize: function() {
                    var E = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        E.pad(this._data, this.blockSize);
                        var W = this._process(!0)
                    } else W = this._process(!0), E.unpad(W);
                    return W
                },
                blockSize: 4
            });
            var b = e.CipherParams = i.extend({
                    init: function(E) {
                        this.mixIn(E)
                    },
                    toString: function(E) {
                        return (E || this.formatter).stringify(this)
                    }
                }),
                d = (u.format = {}).OpenSSL = {
                    stringify: function(E) {
                        var W = E.ciphertext;
                        return E = E.salt, (E ? o.create([1398893684, 1701076831]).concat(E).concat(W) : W).toString(c)
                    },
                    parse: function(E) {
                        E = c.parse(E);
                        var W = E.words;
                        if (W[0] == 1398893684 && W[1] == 1701076831) {
                            var S = o.create(W.slice(2, 4));
                            W.splice(0, 4), E.sigBytes -= 16
                        }
                        return b.create({
                            ciphertext: E,
                            salt: S
                        })
                    }
                },
                I = e.SerializableCipher = i.extend({
                    cfg: i.extend({
                        format: d
                    }),
                    encrypt: function(E, W, S, C) {
                        C = this.cfg.extend(C);
                        var R = E.createEncryptor(S, C);
                        return W = R.finalize(W), R = R.cfg, b.create({
                            ciphertext: W,
                            key: S,
                            iv: R.iv,
                            algorithm: E,
                            mode: R.mode,
                            padding: R.padding,
                            blockSize: E.blockSize,
                            formatter: C.format
                        })
                    },
                    decrypt: function(E, W, S, C) {
                        return C = this.cfg.extend(C), W = this._parse(W, C.format), E.createDecryptor(S, C).finalize(W.ciphertext)
                    },
                    _parse: function(E, W) {
                        return typeof E == "string" ? W.parse(E, this) : E
                    }
                }),
                u = (u.kdf = {}).OpenSSL = {
                    execute: function(E, W, S, C) {
                        return C || (C = o.random(8)), E = w.create({
                            keySize: W + S
                        }).compute(E, C), S = o.create(E.words.slice(W), 4 * S), E.sigBytes = 4 * W, b.create({
                            key: E,
                            iv: S,
                            salt: C
                        })
                    }
                },
                T = e.PasswordBasedCipher = I.extend({
                    cfg: I.cfg.extend({
                        kdf: u
                    }),
                    encrypt: function(E, W, S, C) {
                        return C = this.cfg.extend(C), S = C.kdf.execute(S, E.keySize, E.ivSize), C.iv = S.iv, E = I.encrypt.call(this, E, W, S.key, C), E.mixIn(S), E
                    },
                    decrypt: function(E, W, S, C) {
                        return C = this.cfg.extend(C), W = this._parse(W, C.format), S = C.kdf.execute(S, E.keySize, E.ivSize, W.salt), C.iv = S.iv, I.decrypt.call(this, E, W, S.key, C)
                    }
                })
        }();
        (function() {
            for (var D = Ct, e = D.lib.BlockCipher, wt = D.algo, i = [], o = [], p = [], c = [], w = [], k = [], h = [], y = [], b = [], d = [], I = [], u = 0; 256 > u; u++) I[u] = 128 > u ? u << 1 : u << 1 ^ 283;
            for (var T = 0, E = 0, u = 0; 256 > u; u++) {
                var W = E ^ E << 1 ^ E << 2 ^ E << 3 ^ E << 4,
                    W = W >>> 8 ^ W & 255 ^ 99;
                i[T] = W, o[W] = T;
                var S = I[T],
                    C = I[S],
                    R = I[C],
                    et = 257 * I[W] ^ 16843008 * W;
                p[T] = et << 24 | et >>> 8, c[T] = et << 16 | et >>> 16, w[T] = et << 8 | et >>> 24, k[T] = et, et = 16843009 * R ^ 65537 * C ^ 257 * S ^ 16843008 * T, h[W] = et << 24 | et >>> 8, y[W] = et << 16 | et >>> 16, b[W] = et << 8 | et >>> 24, d[W] = et, T ? (T = S ^ I[I[I[R ^ S]]], E ^= I[I[E]]) : T = E = 1
            }
            var mt = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                wt = wt.AES = e.extend({
                    _doReset: function() {
                        for (var ut = this._key, lt = ut.words, ht = ut.sigBytes / 4, ut = 4 * ((this._nRounds = ht + 6) + 1), bt = this._keySchedule = [], xt = 0; xt < ut; xt++)
                            if (xt < ht) bt[xt] = lt[xt];
                            else {
                                var gt = bt[xt - 1];
                                xt % ht ? 6 < ht && xt % ht == 4 && (gt = i[gt >>> 24] << 24 | i[gt >>> 16 & 255] << 16 | i[gt >>> 8 & 255] << 8 | i[gt & 255]) : (gt = gt << 8 | gt >>> 24, gt = i[gt >>> 24] << 24 | i[gt >>> 16 & 255] << 16 | i[gt >>> 8 & 255] << 8 | i[gt & 255], gt ^= mt[xt / ht | 0] << 24), bt[xt] = bt[xt - ht] ^ gt
                            } for (lt = this._invKeySchedule = [], ht = 0; ht < ut; ht++) xt = ut - ht, gt = ht % 4 ? bt[xt] : bt[xt - 4], lt[ht] = 4 > ht || 4 >= xt ? gt : h[i[gt >>> 24]] ^ y[i[gt >>> 16 & 255]] ^ b[i[gt >>> 8 & 255]] ^ d[i[gt & 255]]
                    },
                    encryptBlock: function(lt, ht) {
                        this._doCryptBlock(lt, ht, this._keySchedule, p, c, w, k, i)
                    },
                    decryptBlock: function(lt, ht) {
                        var ut = lt[ht + 1];
                        lt[ht + 1] = lt[ht + 3], lt[ht + 3] = ut, this._doCryptBlock(lt, ht, this._invKeySchedule, h, y, b, d, o), ut = lt[ht + 1], lt[ht + 1] = lt[ht + 3], lt[ht + 3] = ut
                    },
                    _doCryptBlock: function(lt, ht, ut, bt, xt, gt, kt, F) {
                        for (var tt = this._nRounds, Dt = lt[ht] ^ ut[0], Tt = lt[ht + 1] ^ ut[1], vt = lt[ht + 2] ^ ut[2], It = lt[ht + 3] ^ ut[3], j = 4, Z = 1; Z < tt; Z++) var Rt = bt[Dt >>> 24] ^ xt[Tt >>> 16 & 255] ^ gt[vt >>> 8 & 255] ^ kt[It & 255] ^ ut[j++],
                            Ot = bt[Tt >>> 24] ^ xt[vt >>> 16 & 255] ^ gt[It >>> 8 & 255] ^ kt[Dt & 255] ^ ut[j++],
                            zt = bt[vt >>> 24] ^ xt[It >>> 16 & 255] ^ gt[Dt >>> 8 & 255] ^ kt[Tt & 255] ^ ut[j++],
                            It = bt[It >>> 24] ^ xt[Dt >>> 16 & 255] ^ gt[Tt >>> 8 & 255] ^ kt[vt & 255] ^ ut[j++],
                            Dt = Rt,
                            Tt = Ot,
                            vt = zt;
                        Rt = (F[Dt >>> 24] << 24 | F[Tt >>> 16 & 255] << 16 | F[vt >>> 8 & 255] << 8 | F[It & 255]) ^ ut[j++], Ot = (F[Tt >>> 24] << 24 | F[vt >>> 16 & 255] << 16 | F[It >>> 8 & 255] << 8 | F[Dt & 255]) ^ ut[j++], zt = (F[vt >>> 24] << 24 | F[It >>> 16 & 255] << 16 | F[Dt >>> 8 & 255] << 8 | F[Tt & 255]) ^ ut[j++], It = (F[It >>> 24] << 24 | F[Dt >>> 16 & 255] << 16 | F[Tt >>> 8 & 255] << 8 | F[vt & 255]) ^ ut[j++], lt[ht] = Rt, lt[ht + 1] = Ot, lt[ht + 2] = zt, lt[ht + 3] = It
                    },
                    keySize: 8
                });
            D.AES = e._createHelper(wt)
        })()
    });
    var es = {};
    ft(es, {
        AntifraudStatisticsBlock: () => ve
    });
    var St, Ie, De, Te, ve, is = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        ts();
        dt();
        St = class {
            static getClosestDistanceInSquare(e, i) {
                let o = e.x - i.left,
                    p = e.y - i.top,
                    c = i.width - o,
                    w = i.height - p;
                return Math.min(o, p, c, w)
            }
            static getInnerElementPercent(e, i) {
                let o = e.getBoundingClientRect(),
                    p = Math.abs(o.width * o.height),
                    c = o.width,
                    w = o.height;
                o.top < 0 && (w += o.top), o.left < 0 && (c += o.left);
                let k = o.top + o.height;
                i.height < k && (w -= k - i.height);
                let h = o.left + o.width;
                return i.width < h && (c -= h - i.width), w = w > 0 ? w : 0, c = c > 0 ? c : 0, c * w * 100 / p
            }
            static findImageElementOfTeaser(e) {
                return e.querySelector("img.mcimg")
            }
            static getViewportSize() {
                return {
                    width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
                    height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                }
            }
        }, Ie = class {
            constructor() {
                this.action = "undefined", this.isTabActive = !0, this.clickTime = 0, this.lastScrollTime = 0, this.lastPageResizeTime = 0, this.lastWidgetResizeTime = 0, this.widgetCoordinateX = 0, this.widgetCoordinateY = 0, this.tapRadiusX = 0, this.tapRadiusY = 0, this.isHidden = !1, this.clickToBorderDistance = 0, this.teaserCoordinateX = 0, this.teaserCoordinateY = 0, this.teaserWidth = 0, this.teaserHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.teaserViewportPercent = 0, this.widgetOnLoadDisposition = !1, this.clickCoordinateX = 0, this.clickCoordinateY = 0, this.compileTime = 1682580438, this.forbiddenPatternMatches = 0
            }
        }, De = class {
            constructor(e, i, o, p = []) {
                this.app = e, this.parameters = i, this.initialWidgetCoordinates = {
                    x: 0,
                    y: 0
                }, this.logger = o, this.forbiddenPatterns = p
            }
            onWidgetLoadEvent() {
                let e = this.app.root.getBoundingClientRect();
                this.initialWidgetCoordinates = {
                    x: e.left + window.scrollX,
                    y: e.top + window.scrollY
                }, this.setForbiddenPatternMatches()
            }
            onContextFocusEvent() {
                this.parameters.isTabActive = !0, this.setForbiddenPatternMatches()
            }
            onContextBlurEvent() {
                this.parameters.isTabActive = !1, this.setForbiddenPatternMatches()
            }
            onWidgetClickEvent(e, i) {
                this.setWidgetCoordinates(), this.setForbiddenPatternMatches(), this.setClickCoordinates(i), this.parameters.action = "click", this.parameters.clickTime = this.app.getCurrentTimestamp(), this.parameters.widgetOnLoadDisposition = this.getWidgetDisposition();
                let o = this.app.findClosest(e, "div[data-i]");
                if (o) {
                    let p = o.getBoundingClientRect();
                    this.parameters.isHidden = !o.offsetParent, this.parameters.teaserCoordinateX = p.left, this.parameters.teaserCoordinateY = p.top, this.parameters.teaserWidth = p.width, this.parameters.teaserHeight = p.height, this.parameters.clickToBorderDistance = St.getClosestDistanceInSquare({
                        x: i.clientX,
                        y: i.clientY
                    }, p), this.parameters.teaserViewportPercent = St.getInnerElementPercent(o, St.getViewportSize());
                    let c = St.findImageElementOfTeaser(o);
                    c && this.setImageProperties(c)
                }
            }
            setForbiddenPatternMatches() {
                if (typeof this.app.context.document == "object" && typeof this.app.context.document.documentElement == "object") {
                    let e = this.countPatternMatchesInElement(this.app.context.document.documentElement, this.forbiddenPatterns);
                    this.parameters.forbiddenPatternMatches < e && (this.parameters.forbiddenPatternMatches = e)
                }
            }
            onContextScrollEvent() {
                this.parameters.lastScrollTime = this.app.getCurrentTimestamp()
            }
            onContextResizeEvent() {
                this.parameters.lastPageResizeTime = this.app.getCurrentTimestamp()
            }
            onRootResizeEvent() {
                this.parameters.lastWidgetResizeTime = this.app.getCurrentTimestamp()
            }
            onRootTouchEndEvent(e) {
                let i = e.changedTouches.item(0);
                i && (this.parameters.tapRadiusX = i.radiusX, this.parameters.tapRadiusY = i.radiusY)
            }
            setWidgetCoordinates() {
                let e = this.app.root.getBoundingClientRect();
                this.parameters.widgetCoordinateX = e.left, this.parameters.widgetCoordinateY = e.top
            }
            setImageProperties(e) {
                let i = e.getBoundingClientRect();
                this.parameters.imageWidth = i.width, this.parameters.imageHeight = i.height
            }
            getWidgetDisposition() {
                return this.parameters.widgetCoordinateX + window.scrollX !== this.initialWidgetCoordinates.x || this.parameters.widgetCoordinateY + window.scrollY !== this.initialWidgetCoordinates.y
            }
            setClickCoordinates(e) {
                e.clientX || e.clientY ? (this.parameters.clickCoordinateX = e.clientX, this.parameters.clickCoordinateY = e.clientY) : e.touches && e.touches[0] && (this.parameters.clickCoordinateX = e.touches[0].clientX, this.parameters.clickCoordinateY = e.touches[0].clientY)
            }
            countPatternMatchesInElement(e, i) {
                let o = e.outerHTML;
                return i.reduce((p, c) => {
                    try {
                        let w = new RegExp(c, "g"),
                            k = o.match(w);
                        if (k) return p + k.length
                    } catch (w) {
                        this.logger && this.logger.sendData(`Error processing pattern "${c}": ${w.message}`)
                    }
                    return p
                }, 0)
            }
        }, Te = class {
            constructor(e, i, o) {
                this.protocol = e, this.parameters = i, this.client = o
            }
            send(e, i) {
                let o = btoa(JSON.stringify({
                        rid: i,
                        showHash: e,
                        parameters: this.getEncodedParameters(e, i)
                    })),
                    p = new Blob([o]);
                this.client.beaconBlob("antifraud-event-hash", this.protocol + "//c.mgid.com/aws", p, {})
            }
            getEncodedParameters(e, i) {
                let o = {
                    stringify: function(p) {
                        let c = {
                            ct: btoa(p.ciphertext.toString())
                        };
                        return p.iv && (c.iv = p.iv.toString()), p.salt && (c.s = btoa(p.salt.toString()) + Math.random().toString(36).slice(-2)), JSON.stringify(c).replace(/\s/g, "")
                    }
                };
                return btoa(Ct.AES.encrypt(JSON.stringify(this.parameters), e + i, {
                    format: o
                }).toString())
            }
        }, ve = class extends $ {
            constructor(e) {
                super(e);
                let i = null;
                this.name = "AntifraudStatisticsBlock", this.parameters = new Ie, this.statistics = new Te(this.app.webProtocol, this.parameters, this.app.request), this.eventHandler = new De(this.app, this.parameters, i, Array.from(ot)), this.addHook("afterLoadNewsHooks", this.initAntifraudStatistics.bind(this)), this.app.onAntifraudStatisticsClickHandler = this.clickHandler.bind(this), this.app.addClickHandler(this.app.clickHandlerList.onAntifraudStatisticsClick.handler, this.app.clickHandlerList.onAntifraudStatisticsClick.priority)
            }
            initAntifraudStatistics() {
                this.eventHandler.onWidgetLoadEvent(), this.app.addEvent(this.app.context, "focus", () => this.eventHandler.onContextFocusEvent()), this.app.addEvent(this.app.context, "blur", () => this.eventHandler.onContextBlurEvent()), this.app.addEvent(this.app.context, "scroll", () => this.eventHandler.onContextScrollEvent()), this.app.addEvent(this.app.context, "resize", () => this.eventHandler.onContextResizeEvent()), this.app.addEvent(this.app.root, "resize", () => this.eventHandler.onRootResizeEvent()), this.app.addEvent(this.app.root, "touchend", e => this.eventHandler.onRootTouchEndEvent(e))
            }
            clickHandler(e, i) {
                return this.eventHandler.onWidgetClickEvent(e, i), this.statistics.send(e.getAttribute("data-hash"), this.app.servicerData.rid), !0
            }
        }
    });
    var ss = Bt((exports, module) => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();

        function a0z(D, e) {
            var i = a0M();
            return a0z = function(o, p) {
                o = o - 356;
                var c = i[o];
                return c
            }, a0z(D, e)
        }(function(D, e) {
            for (var i = a0z, o = D();
                [];) try {
                var p = -parseInt(i(517)) / 1 + parseInt(i(582)) / 2 * (parseInt(i(448)) / 3) + -parseInt(i(573)) / 4 + parseInt(i(488)) / 5 * (-parseInt(i(692)) / 6) + parseInt(i(687)) / 7 + -parseInt(i(594)) / 8 + -parseInt(i(490)) / 9 * (-parseInt(i(691)) / 10);
                if (p === e) break;
                o.push(o.shift())
            } catch {
                o.push(o.shift())
            }
        })(a0M, 194656);

        function a0M() {
            var D = ["level", "right", "Shockwave Flash", "linkMouseDown", "effectiveType", "networkInformationType", "getCookieValue", "function", "295620LewUnA", "parent", "getBrowserFlag", "pageY", "this.context['ArrayBufferView']", "ontouchstart", "platform", "bindAntiFraudParams", "encodeParameters", "112088eBIXPF", "data-rel", "connection", "documentElement", "this.context['SiteBoundCredential']", "offsetParent", "firstChild", "modulePrefix", "miliSecondsFromScroll", "sensorDomain", "defineProperty", "frameElement", "996400qtnrvL", "root", "setRequestHeader", "contains", "getHardwareConcurrency", "networkInformationSaveData", "body", "linkFocus", "request", "resultUrl", "btoa", "getTime", "setItem", "webkitConnection", "this.context['HTMLBaseFontElement']", "empty", "setReferrers", "anuraEnabled", "opera", "src", "rules", "setCoords", "setDeepSession", "linkMouseMove", "linkMouseOver", "sendAnura", "bind", "this.context['DOMException']['ABORT_ERR']", "clientTop", "length", "this.context['clientInformation']['vendor']", "timeG", "instance", "event", "localStorage", "wct", "hasOwnProperty", "stringify", "PageOffset", "logger", "referer", "setEvents", "str", "this.context['DeviceMotionEvent']", "afReferrer", "mousedown", "afHref", "sendData", "touches", "app", "isTouchStart", "anura", "linkClick", "async", "isSupportHtml5", "screenY", "isLocalStorageEnabled", "consentData", "context", "getTimePerformance", "networkInformationEffectiveType", "afCoords", "toString", "afImgLoaded", "sendAnuraAtLoad", "getId", "getDeviceOrientation", "isOnLine", "AnuraCallback", "https://script.anura.io/request.js", "afBrowserFlag", "self", "getContext", "showHash", "gdprApplies", "informerPrefix", "deviceorientation", "addEvent", "getCoordinatesClickOfWindow", "createEvent", "this.context['close']", "send", "ShockwaveFlash.ShockwaveFlash", "packReferrers", "unknown|unknown|0", "afBrowserHookMask", "links", "linkTouchEnd", "dispatchEvent", "DeviceOrientationEvent", "this.context['CanvasCaptureMediaStreamTrack']", "1.3.0", "exid", "622419zBCkMN", "saveData", "sharedCookieStorage", "adler32", "1378530ivZlvU", "36xZZAhC", "getParameterFromLink", "sessionStorage", "trimString", "clientLeft", "mozInnerScreenX", "Storage", "height", "REQUEST_URL", "this.context['navigator']['webkitGetGamepads']", "Anura response cannot parse: ", "left", "opr", "addEventListener", "min", "clientX", "top", "replace", "removeEventListener", "setInterval", "charging", "focus", "buildQueryParams", "this.context['Set']", "createElement", "beacon", "callback", "getCoordsClickOfWindow", "afPrimaryReferrer", "indexOf", "afActiveEl", "__esModule", "storageName", "isCookieEnabled", "symbol", "all", "clearInterval", "campaign", "this.context['document']['prepend']", "bottom", "getCoordsClickOfPage", "setNetworkInformation", "storagePrefix", "load", "mouseover", "href", "ABCDEFGHIJKLMNOPQR$TUVWXYZabcde*ghijklmnopqrstuvwxyz0123456789+/=", "navigator", "svspr", "getPlugins", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcde.ghijklmnopqrstuv0123456789wxyz-_", "isTransparent", "setWidgetEvents", "run", "reWriteHref", "isJavaEnabled", "constructor", "groupBitParams", "this.context['navigator']['taintEnabled']", "ceil", "now", "composite", "this.context['Notification']", "scrollTop", "this.context['self']['SharedWorker']", "publisherSource", "afLevel", "isFlashEnabled", "getCoordinatesClickOfPage", "this.context['Entity']", "getScreenX", "push", "join", "afCoordsClickAndLinkOfPage", "MicrosoftInternetExplorer", "clearImmediate", "slice", "oct2chr", "afTimePerformance", "Mgid", "?k=", "dispatchKEvent", "undefined", "svs", "afShortEnabled", "generateBatteryInfo", "mousemove", "afRealHref", "bindEvents", "offsetLeft", "linkTouchStart", "getNetwrokInformation", "toStringTag", "18FYhSNF", "getCoordsElementOfPage", "Anura response error: ", "this.context['BeforeLoadEvent']", "config", "x64String", "getRectOfElement", "detachEvent", "hardwareConcurrency", "getScreenY", "cookieStorage", "result", "this.context['clearImmediate']", "cookie", "props", "afPlugins", "script", "isAnyImageLoaded", "propertiesDom", "/anura", "charAt", "GoogleInc.", "exports", "Module", "afMgLoaded", "topIFrame", "compressNumber", "isSessionStorageEnabled", "scroll", "mouseup", "Events", "MarketGid", "this.context['AnalyserNode']", "getBoundingClientRect", "opacity", "onload", "object", '({command:"this.context.close.self"})', "source", "screen", "149915qbcRtF", "sendImage", "27oQwJNa", "this.context['document']['createTouch']", "initEvent", "text/javascript", "exec", "test", "initialize", "touchend", "number", "afDeepSession", "parentNode", "setCoordsClickAndLinkOfPage", "string", "then", "dec2chr", "generated", "prototype", "charCodeAt", "open", "document", "width", "parse", "sendBeacon", "(?:^|; )", "substr", "version", "getBattery", "265731IIKfim", "options", "this.context['Touch']", "afSnapshotProperties", "unknown", "networkInformation", "getSnapshotProperties", "ActiveXObject", "Content-type", "setCookie", "type", "afDeviceOrientation", "getFrameElement", "=([^;]*)", "https://script.anura.io/result.json", "domExtractor", "iframePlacementType", "useTimePerformance", "this.context['TouchEvent']", "name", "timerFromScroll", "buildNumber", "javaEnabled", "getError", "onLine", "getTimezoneOffset", "scrollLeft", "plugins", "initAntiFraud", "clientY", "getExId", "generateHash", "screenX", "referrer", "SvsdsFlag", "getItem", "206", "response", "application/x-www-form-urlencoded", "getElementsByTagName", "appendChild", "getAttribute", "split", "not_empty", "afCharging", "svsds", "this.context['external']['AddSearchProvider']", "pageX"];
            return a0M = function() {
                return D
            }, a0M()
        }(function() {
            var zc = a0z,
                M = {
                    927: function(D, e) {
                        var i;
                        i = function(o) {
                            var p = a0z;
                            o[p(515)] = p(685), o.bstr = function(c, w) {
                                var k = p,
                                    h = 1,
                                    y = 0,
                                    b = c.length,
                                    d = 0;
                                typeof w == "number" && (h = 65535 & w, y = w >>> 16);
                                for (var I = 0; I < b;) {
                                    for (d = Math[k(369)](b - I, 2654) + I; I < d; I++) y += h += 255 & c[k(507)](I);
                                    h = 15 * (h >>> 16) + (65535 & h), y = 15 * (y >>> 16) + (65535 & y)
                                }
                                return y % 65521 << 16 | h % 65521
                            }, o.buf = function(c, w) {
                                var k = p,
                                    h = 1,
                                    y = 0,
                                    b = c.length,
                                    d = 0;
                                k(498) == typeof w && (h = 65535 & w, y = w >>> 16 & 65535);
                                for (var I = 0; I < b;) {
                                    for (d = Math[k(369)](b - I, 2654) + I; I < d; I++) y += h += 255 & c[I];
                                    h = 15 * (h >>> 16) + (65535 & h), y = 15 * (y >>> 16) + (65535 & y)
                                }
                                return y % 65521 << 16 | h % 65521
                            }, o[p(636)] = function(c, w) {
                                var k = p,
                                    h = 1,
                                    y = 0,
                                    b = c[k(623)],
                                    d = 0,
                                    I = 0,
                                    u = 0;
                                typeof w == "number" && (h = 65535 & w, y = w >>> 16);
                                for (var T = 0; T < b;) {
                                    for (d = Math[k(369)](b - T, 2918); d > 0;)(I = c[k(507)](T++)) < 128 ? h += I : I < 2048 ? (y += h += 192 | I >> 6 & 31, --d, h += 128 | 63 & I) : I >= 55296 && I < 57344 ? (y += h += 240 | (I = 64 + (1023 & I)) >> 8 & 7, --d, y += h += 128 | I >> 2 & 63, --d, y += h += 128 | (u = 1023 & c[k(507)](T++)) >> 6 & 15 | (3 & I) << 4, --d, h += 128 | 63 & u) : (y += h += 224 | I >> 12 & 15, --d, y += h += 128 | I >> 6 & 63, --d, h += 128 | 63 & I), y += h, --d;
                                    h = 15 * (h >>> 16) + (65535 & h), y = 15 * (y >>> 16) + (65535 & y)
                                }
                                return y % 65521 << 16 | h % 65521
                            }
                        }, i(typeof DO_NOT_EXPORT_ADLER > "u" ? e : {})
                    },
                    842: function(U, t, x) {
                        "use strict";
                        var n = x(764);

                        function Q(D) {
                            var e = a0z;
                            return Q = e(572) == typeof Symbol && e(389) == typeof Symbol.iterator ? function(i) {
                                return typeof i
                            } : function(i) {
                                var o = e;
                                return i && o(572) == typeof Symbol && i[o(411)] === Symbol && i !== Symbol.prototype ? o(389) : typeof i
                            }, Q(D)
                        }
                        var f = function() {
                            var N = a0z;

                            function V(D) {
                                var e = a0z;
                                this[e(452)] = D, this[e(473)] = null, this[e(652)] = D[e(652)]
                            }
                            return V.prototype[N(475)] = function() {
                                var D = N,
                                    e = null;
                                if ("sessionStorage" in this[D(652)]) try {
                                    this[D(652)][D(357)][D(606)](D(438), 1), e = this[D(652)][D(357)].getItem(D(438))
                                } catch {}
                                return e ? 1 : 0
                            }, V[N(506)][N(575)] = function() {
                                var D = N,
                                    e = 0;
                                return (this[D(652)][D(612)] || this.context[D(367)] !== void 0) && (e += 1), (this[D(652)][D(612)] && this[D(652)][D(612)][D(538)] || this.context[D(367)] !== void 0) && (e += 2), (this.context.document[D(390)] || this[D(652)].MSStream) && (e += 4), this.context[D(604)] && !this[D(652)][D(402)].msPointerEnabled && this.context[D(430)] === void 0 || (e += 8), this.context.chrome && (e += 16), this[D(652)][D(360)] !== void 0 && (e += 32), this.context.external || (e += 64), e
                            }, V[N(506)][N(410)] = function() {
                                var D = N;
                                return this[D(652)][D(402)][D(539)]() ? 1 : 0
                            }, V[N(506)][N(422)] = function() {
                                var D = N,
                                    e = 0;
                                if (this[D(652)][D(402)][D(544)] !== void 0 && D(484) === Q(this[D(652)][D(402)].plugins[D(567)])) e = 1;
                                else if (this[D(652)][D(524)] !== void 0) try {
                                    new ActiveXObject(D(676)) && (e = 1)
                                } catch {}
                                return e
                            }, V.prototype[N(388)] = function() {
                                var D = N;
                                return this.context[D(402)].cookieEnabled ? 1 : 0
                            }, V[N(506)][N(650)] = function() {
                                var D = N,
                                    e = null;
                                if (D(628) in this.context) try {
                                    this[D(652)].localStorage[D(606)](D(438), 1), e = this.context[D(628)][D(552)](D(438))
                                } catch {}
                                return e ? 1 : 0
                            }, V.prototype[N(412)] = function() {
                                var D = N,
                                    e = 0;
                                return this[D(410)]() && (e += 1), this.isFlashEnabled() && (e += 2), this[D(388)]() && (e += 4), this[D(650)]() && (e += 8), this.isSessionStorageEnabled() && (e += 16), this[D(644)]() && (e += 32), e
                            }, V[N(506)][N(644)] = function() {
                                var D = N;
                                return this[D(652)][D(578)] !== void 0
                            }, V[N(506)][N(523)] = function(m) {
                                var M5 = N;
                                m = m || {
                                    props: {
                                        3: M5(674),
                                        13: M5(413),
                                        16: "this.context['EventTarget']['toString']",
                                        18: "this.context['navigator']['appName']",
                                        20: "this.context['ApplicationCacheErrorEvent']",
                                        22: M5(460),
                                        23: "this.context['CryptoKey']",
                                        25: M5(563),
                                        32: "this.context['chrome']['search']",
                                        33: M5(624),
                                        40: M5(535),
                                        43: M5(637),
                                        46: M5(364),
                                        49: M5(417),
                                        56: M5(451),
                                        57: M5(424),
                                        72: M5(480),
                                        74: M5(577),
                                        76: M5(608),
                                        86: M5(419),
                                        87: M5(519),
                                        91: M5(621),
                                        92: M5(378),
                                        98: M5(491),
                                        138: "this.context['NaN']",
                                        139: M5(393),
                                        163: M5(586),
                                        165: M5(684)
                                    },
                                    rules: {
                                        contains: {
                                            3: [M5(485)],
                                            18: [M5(429)],
                                            33: [M5(469)]
                                        },
                                        not_empty: [13, 16, 18, 20, 22, 23, 25, 32, 40, 43, 46, 49, 56, 57, 76, 86, 87, 91, 92, 98, 138, 139, 163, 165],
                                        undefined: [25, 46, 72, 74, 87]
                                    }
                                };
                                var Y = "";
                                for (var g in m[M5(462)]) {
                                    g = parseInt(g, 10);
                                    var l = "";
                                    try {
                                        l = eval(m[M5(462)][g])
                                    } catch (D) {
                                        l = M5(437)
                                    }
                                    var O = (l + "")[M5(372)](/\s/g, "");
                                    if (m.rules[M5(597)] && g in m.rules[M5(597)])
                                        for (var r in m[M5(614)].contains[g]) Y += O[M5(384)](m[M5(614)][M5(597)][g][r]) !== -1 ? "1" : "0";
                                    m[M5(614)].empty && m[M5(614)][M5(609)][M5(384)](g) !== -1 && (Y += O === "" ? "1" : "0"), m[M5(614)].not_empty && m[M5(614)][M5(560)].indexOf(g) !== -1 && (Y += O !== "undefined" && O !== "" ? "1" : "0"), m[M5(614)][M5(437)] && m[M5(614)][M5(437)][M5(384)](g) !== -1 && (Y += M5(437) === O ? "1" : "0")
                                }
                                for (var v = 6, q = Math.ceil(Y.length / v), s = "", g = 0; g < q; g++) {
                                    var a = Y[M5(514)](g * v, v),
                                        J = parseInt(a, 2);
                                    s += n.w1[M5(504)](J)
                                }
                                return s
                            }, V[N(506)][N(454)] = function(D) {
                                var e = N,
                                    i = -32768,
                                    o = {
                                        top: i,
                                        bottom: i,
                                        left: i,
                                        right: i,
                                        height: i,
                                        width: i
                                    };
                                try {
                                    o = D[e(481)]()
                                } catch {
                                    return o
                                }
                                var p = {
                                    top: o[e(371)],
                                    bottom: o[e(394)],
                                    left: o[e(366)],
                                    right: o[e(566)],
                                    height: o.height ? o.height : o[e(394)] - o.top,
                                    width: o[e(510)] ? o[e(510)] : o.right - o[e(366)]
                                };
                                if (this[e(652)][e(665)] !== this.context[e(371)]) {
                                    var c = this[e(529)]();
                                    if (c) {
                                        var w = c[e(481)]();
                                        p[e(371)] += w.top, p[e(394)] += w[e(371)], p[e(366)] += w[e(366)], p.right += w[e(366)]
                                    }
                                }
                                return p
                            }, V[N(506)][N(529)] = function() {
                                var D = N;
                                if (this[D(473)] === void 0) try {
                                    var e = void 0,
                                        i = void 0;
                                    for (i = (e = this[D(652)])[D(593)]; e[D(593)]; e = e[D(574)]) i = e[D(593)];
                                    this[D(473)] = i
                                } catch {
                                    this[D(473)] = null
                                }
                                return this.topIFrame
                            }, V[N(506)][N(672)] = function(D) {
                                var e = N,
                                    i = 0,
                                    o = 0;
                                return e(370) in D || e(546) in D ? (i = D[e(370)], o = D[e(546)]) : e(642) in D && D[e(642)] && D[e(642)][0] && (i = D.touches[0].clientX, o = D[e(642)][0][e(546)]), {
                                    x: i,
                                    y: o
                                }
                            }, V[N(506)][N(423)] = function(D) {
                                var e = N,
                                    i = 0,
                                    o = 0;
                                return D || (D = this.context[e(627)]), e(564) in D && "pageY" in D ? (i = D[e(564)], o = D[e(576)]) : e(642) in D && D.touches && D[e(642)][0] ? (i = D.touches[0][e(564)], o = D.touches[0].pageY) : e(370) in D && e(546) in D && (i = D[e(370)] + (this.context[e(509)][e(585)][e(543)] || this.context[e(509)][e(600)][e(543)]) - this.context[e(509)][e(585)][e(359)], o = D.clientY + (this[e(652)].document[e(585)][e(418)] || this[e(652)].document.body.scrollTop) - this[e(652)][e(509)][e(585)][e(622)]), {
                                    x: i,
                                    y: o
                                }
                            }, V[N(506)][N(449)] = function(D) {
                                var e = N,
                                    i = 0,
                                    o = 0;
                                do i += D[e(444)], o += D.offsetTop, D = D[e(587)]; while (D);
                                return {
                                    x: i,
                                    y: o
                                }
                            }, V[N(506)].getCoordsClickOfWindow = function(D) {
                                var e = N,
                                    i = -32768,
                                    o = i,
                                    p = i;
                                return "clientX" in D && e(546) in D ? (o = D[e(370)], p = D[e(546)]) : e(642) in D && D[e(642)] && D.touches[0] && (o = D[e(642)][0][e(370)], p = D[e(642)][0][e(546)]), {
                                    x: o,
                                    y: p
                                }
                            }, V[N(506)][N(660)] = function(D) {
                                var e = N;
                                if (this[e(652)][e(683)]) {
                                    var i = !0,
                                        o = 0;
                                    n.ju[e(671)](this[e(652)], e(670), function() {
                                        i && (o++, i = !1, setTimeout(function() {
                                            i = !0
                                        }, 1e3)), D(o.toString())
                                    })
                                } else D("0")
                            }, V[N(506)][N(395)] = function(D) {
                                var e = N,
                                    i = -32768,
                                    o = i,
                                    p = i;
                                return D || (D = this[e(652)][e(627)]), e(564) in D && e(576) in D ? (o = D[e(564)], p = D[e(576)]) : e(642) in D && D[e(642)] && D[e(642)][0] ? (o = D.touches[0][e(564)], p = D[e(642)][0].pageY) : "clientX" in D && e(546) in D && (o = D[e(370)] + (this.context[e(509)][e(585)][e(543)] || this[e(652)].document[e(600)][e(543)]) - this[e(652)][e(509)][e(585)][e(359)], p = D.clientY + (this[e(652)].document[e(585)][e(418)] || this[e(652)][e(509)].body[e(418)]) - this[e(652)][e(509)][e(585)].clientTop), {
                                    x: o,
                                    y: p
                                }
                            }, V.prototype[N(406)] = function(D) {
                                for (var e = N; D[e(588)] && D.firstChild.nodeType === 1;) D = D.firstChild;
                                for (; D[e(500)];) {
                                    if (this[e(652)].getComputedStyle(D).getPropertyValue(e(482)) <= .2) return 1;
                                    if (D === this[e(652)].document[e(600)]) break;
                                    D = D[e(500)]
                                }
                                return 0
                            }, V[N(506)][N(661)] = function() {
                                var D = N,
                                    e = 1;
                                return this[D(652)][D(402)].onLine !== void 0 && (e = this[D(652)].navigator[D(541)] ? 1 : 0), e
                            }, V.prototype[N(440)] = function(D) {
                                var e = N;
                                this[e(652)][e(402)][e(516)] && this.context[e(402)].getBattery().then(function(i) {
                                    var o = e;
                                    D(+i[o(375)], 100 * i[o(565)])
                                })
                            }, V[N(506)].isSupportHtml5 = function() {
                                var D = N,
                                    e = this.context[D(509)].createElement("canvas");
                                return e[D(666)] && e.getContext("2d") ? 1 : 0
                            }, V.prototype[N(425)] = function() {
                                var D = N,
                                    e = 0;
                                return this[D(652)][D(549)] !== void 0 && (e = Math.abs(this[D(652)][D(549)])), e
                            }, V[N(506)][N(457)] = function() {
                                var D = N,
                                    e = 0;
                                return this.context[D(649)] !== void 0 && (e = Math.abs(this[D(652)][D(649)])), e
                            }, V.prototype.isAnyImageLoaded = function(D) {
                                for (var e = N, i = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/, o = /\/\/s-img.*\/([\d]+)\/.*\.(jpg|gif)/, p = this[e(452)][e(595)][e(556)]("IMG"), c = this[e(452)].root.getElementsByTagName("VIDEO"), w = [], k = 0; k < p[e(623)]; k++) w[e(426)](p[k]);
                                for (k = 0; k < c.length; k++) w[e(426)](c[k]);
                                for (k = 0; k < w[e(623)]; k++) {
                                    var h = i[e(494)](w[k][e(613)]);
                                    h || (h = o[e(494)](w[k].src)), n.ju[e(671)](w[k], e(398), D)
                                }
                            }, V[N(506)][N(598)] = function() {
                                var D = N,
                                    e = 0;
                                return this[D(652)][D(402)].hardwareConcurrency !== void 0 && (e = this[D(652)].navigator[D(456)]), e
                            }, V.prototype[N(404)] = function() {
                                var D = N,
                                    e = "";
                                if (this[D(652)].navigator[D(544)] !== void 0) {
                                    for (var i = this[D(652)].navigator[D(544)], o = [], p = 0; p < i[D(623)]; p++) o[D(426)](i[p][D(536)]);
                                    e = n.Ld.trimString(o[D(427)]("|")[D(372)](/\s/g, ""), 300)
                                }
                                return e
                            }, V.prototype[N(446)] = function() {
                                var D = N,
                                    e = {
                                        networkInformationType: D(521),
                                        networkInformationEffectiveType: D(521),
                                        networkInformationSaveData: 0
                                    };
                                try {
                                    var i = this[D(652)][D(402)][D(584)] || this[D(652)].navigator.mozConnection || this[D(652)][D(402)][D(607)];
                                    i[D(527)] !== void 0 && (e.networkInformationType = i[D(527)]), i[D(569)] !== void 0 && (e[D(654)] = i[D(569)]), i[D(688)] !== void 0 && (e[D(599)] = i[D(688)] ? 1 : 0)
                                } catch {}
                                return e
                            }, V[N(506)][N(653)] = function() {
                                return new Promise(function(D) {
                                    for (var e = a0z, i = performance[e(415)](), o = new Array(5e3), p = 0; p < 5e3; p++) o[p] = Math.random();
                                    o.sort();
                                    var c = performance[e(415)]();
                                    D(Math.round(c - i))
                                })
                            }, V
                        }();
                        t.Z = f
                    },
                    764: function(D, e, i) {
                        "use strict";
                        i.d(e, {
                            w1: function() {
                                return c
                            },
                            ju: function() {
                                return w
                            },
                            AE: function() {
                                return k
                            },
                            Ld: function() {
                                return h
                            }
                        });
                        var o = i(927),
                            p = i.n(o),
                            c = function() {
                                var y = a0z;

                                function b() {}
                                return b[y(474)] = function(d) {
                                    var I = y;
                                    if (d === null || isNaN(d) || d === "") return "";
                                    var u = "";
                                    (d = d) < 0 && (u = ",", d *= -1);
                                    for (var T = parseInt(String(d), 10).toString(8), E = Math[I(414)](T[I(623)] / 2), W = 0; W < E; W++) {
                                        var S = T[I(514)](2 * W, 2);
                                        u += b[I(432)](S)
                                    }
                                    return u
                                }, b[y(453)] = function(d) {
                                    var I = y;
                                    d = d[I(656)](), d = unescape(encodeURIComponent(d));
                                    for (var u, T, E, W, S, C, R, et = I(401), mt = "", wt = 0; wt < d[I(623)];) W = (u = d.charCodeAt(wt++)) >> 2, S = (3 & u) << 4 | (T = d[I(507)](wt++)) >> 4, E = d[I(507)](wt++), C = isNaN(T) ? 64 : (15 & T) << 2 | E >> 6, R = isNaN(E) ? 64 : 63 & E, mt += et.charAt(W) + et[I(468)](S) + et[I(468)](C) + et[I(468)](R);
                                    return mt
                                }, b[y(504)] = function(d) {
                                    var I = y;
                                    return I(405)[I(514)](d, 1)
                                }, b[y(432)] = function(d) {
                                    return {
                                        "00": "A",
                                        "01": "B",
                                        "02": "C",
                                        "03": "D",
                                        "04": "E",
                                        "05": "F",
                                        "06": "G",
                                        "07": "H",
                                        10: "I",
                                        11: "J",
                                        12: "K",
                                        13: "L",
                                        14: "M",
                                        15: "N",
                                        16: "O",
                                        17: "P",
                                        20: "Q",
                                        21: "R",
                                        22: "S",
                                        23: "T",
                                        24: "U",
                                        25: "V",
                                        26: "W",
                                        27: "X",
                                        30: "Y",
                                        31: "Z",
                                        32: "a",
                                        33: "b",
                                        34: "c",
                                        35: "d",
                                        36: "e",
                                        37: ".",
                                        40: "g",
                                        41: "h",
                                        42: "i",
                                        43: "j",
                                        44: "k",
                                        45: "l",
                                        46: "m",
                                        47: "n",
                                        50: "o",
                                        51: "p",
                                        52: "q",
                                        53: "r",
                                        54: "s",
                                        55: "t",
                                        56: "u",
                                        57: "v",
                                        60: "0",
                                        61: "1",
                                        62: "2",
                                        63: "3",
                                        64: "4",
                                        65: "5",
                                        66: "6",
                                        67: "7",
                                        70: "8",
                                        71: "9",
                                        72: "w",
                                        73: "x",
                                        74: "y",
                                        75: "z",
                                        76: "-",
                                        77: "_",
                                        0: "!",
                                        1: "*",
                                        2: ";",
                                        3: ":",
                                        4: "=",
                                        5: "+",
                                        6: "$",
                                        7: "~"
                                    } [d]
                                }, b.adler32 = function(d) {
                                    var I = y;
                                    return p()[I(636)](d) >>> 0
                                }, b
                            }(),
                            w = function() {
                                var y = a0z;

                                function b() {}
                                return b[y(671)] = function(d, I, u) {
                                    var T = y;
                                    d[T(368)] ? d.addEventListener(I, u, !1) : d.attachEvent("on" + I, u)
                                }, b.removeEvent = function(d, I, u) {
                                    var T = y;
                                    d[T(373)] ? d.removeEventListener(I, u, !1) : d[T(455)]("on" + I, u)
                                }, b
                            }(),
                            k = function() {
                                var y = a0z;

                                function b() {}
                                return b[y(377)] = function(d) {
                                    var I = y,
                                        u = [];
                                    for (var T in d) u[I(426)](T + "=" + d[T]);
                                    return u[I(427)]("&")
                                }, b
                            }(),
                            h = function() {
                                var y = a0z;

                                function b() {}
                                return b[y(358)] = function(d, I, u) {
                                    var T = y;
                                    u === void 0 && (u = !1);
                                    var E = d.length;
                                    if (E <= I) return d;
                                    var W = u ? E - I : 0;
                                    return d[T(514)](W, I)
                                }, b
                            }()
                    }
                },
                z = {};

            function X(D) {
                var e = a0z,
                    i = z[D];
                if (i !== void 0) return i[e(470)];
                var o = z[D] = {
                    exports: {}
                };
                return M[D](o, o[e(470)], X), o[e(470)]
            }
            X.n = function(D) {
                var e = a0z,
                    i = D && D[e(386)] ? function() {
                        return D.default
                    } : function() {
                        return D
                    };
                return X.d(i, {
                    a: i
                }), i
            }, X.d = function(D, e) {
                var i = a0z;
                for (var o in e) X.o(e, o) && !X.o(D, o) && Object[i(592)](D, o, {
                    enumerable: !0,
                    get: e[o]
                })
            }, X.o = function(D, e) {
                var i = a0z;
                return Object[i(506)].hasOwnProperty.call(D, e)
            }, X.r = function(D) {
                var e = a0z;
                e(437) != typeof Symbol && Symbol[e(447)] && Object[e(592)](D, Symbol[e(447)], {
                    value: e(471)
                }), Object[e(592)](D, e(386), {
                    value: !0
                })
            };
            var K = {};
            (function() {
                "use strict";
                X.r(K), X.d(K, {
                    AntiFraud: function() {
                        return i
                    },
                    Anura: function() {
                        return c
                    },
                    Application: function() {
                        return k
                    },
                    BaseConfiguration: function() {
                        return o
                    }
                });
                var D = X(842),
                    e = X(764),
                    i = function() {
                        var h = a0z;

                        function y(b) {
                            var d = a0z;
                            this.config = b, this[d(590)] = null, this.afPrimaryReferrer = "", this.afReferrer = "", this.afHref = "", this[d(499)] = 0, this[d(472)] = 0, this[d(657)] = 0, this[d(520)] = "", this.afCoords = "", this[d(428)] = "", this[d(528)] = "", this[d(664)] = 0, this[d(463)] = "", this.afBrowserHookMask = 0, this[d(561)] = -1, this[d(421)] = -1, this[d(537)] = null, this.networkInformation = d(678), this[d(433)] = -1, this[d(532)] = new D.Z(b)
                        }
                        return y[h(506)][h(496)] = function() {
                            var b = h,
                                d = this;
                            this[b(452)].cookieStorage.getCookie(), this.setReferrers(), this[b(616)](), this[b(396)](), this[b(472)] = new Date().getTime(), this[b(520)] = this[b(532)][b(523)](this[b(452)][b(466)] || null), this[b(664)] = this[b(532)][b(575)](), this[b(679)] = this[b(532)][b(575)](), this.afPlugins = this[b(532)][b(404)](), this.config[b(534)] && this.domExtractor[b(653)]()[b(503)](function(I) {
                                d.afTimePerformance = I
                            }), this.setEvents()
                        }, y.prototype[h(548)] = function(b, d, I) {
                            var u = h;
                            I === void 0 && (I = "");
                            var T = new Date,
                                E = this[u(532)][u(382)](b),
                                W = this.domExtractor[u(454)](d),
                                S = this[u(532)].isTransparent(d);
                            return this[u(615)](d), this[u(501)](b, d), y[u(581)]({
                                1: "",
                                2: "",
                                3: e.w1[u(474)](this[u(472)]),
                                4: e.w1[u(474)](T[u(605)]()),
                                5: "",
                                7: e.w1[u(453)](E.x + "|" + E.y),
                                8: e.w1[u(474)](y[u(356)](d, u(629)) ? 1 : 0),
                                9: e.w1[u(474)](W[u(366)]),
                                10: e.w1.compressNumber(this[u(590)]),
                                11: e.w1.compressNumber(W[u(371)]),
                                12: "",
                                13: e.w1[u(453)](W[u(510)] + "|" + W.height),
                                14: "",
                                15: this[u(520)],
                                16: "",
                                17: e.w1[u(474)](this.afBrowserFlag),
                                18: e.w1.compressNumber(d[u(583)]),
                                19: this.afHref,
                                20: this[u(638)],
                                21: this[u(383)],
                                22: e.w1.compressNumber(this[u(499)]),
                                23: e.w1[u(453)](this[u(428)]),
                                24: e.w1[u(453)](this[u(528)]),
                                25: e.w1.compressNumber(this[u(433)]),
                                27: e.w1[u(474)](this[u(452)].iframePlacementType),
                                28: e.w1[u(504)](this[u(532)][u(412)]()),
                                29: e.w1[u(453)](this[u(655)]),
                                30: e.w1.compressNumber(this[u(452)][u(652)].screen.width),
                                31: e.w1.compressNumber(this[u(452)][u(652)][u(487)].height),
                                33: e.w1[u(474)](this.afImgLoaded),
                                34: e.w1.compressNumber(S),
                                35: e.w1[u(453)](this[u(452)][u(652)][u(402)].userAgent),
                                36: e.w1[u(453)](this.afPlugins),
                                37: "",
                                38: e.w1[u(453)](this[u(452)][u(652)][u(402)][u(579)]),
                                39: e.w1[u(453)](-T[u(542)]()),
                                40: e.w1.x64String(this[u(561)] + "|" + this[u(421)]),
                                41: e.w1[u(453)](this[u(452)].context[u(487)].availWidth + "|" + this[u(452)][u(652)][u(487)].availHeight),
                                42: e.w1[u(453)](this[u(522)]),
                                43: e.w1.compressNumber(this[u(532)][u(425)]()),
                                44: e.w1[u(474)](this[u(532)][u(457)]()),
                                45: e.w1[u(474)](this.afBrowserHookMask),
                                46: e.w1.compressNumber(e.w1[u(690)](I)),
                                47: e.w1[u(474)](this[u(532)][u(648)]()),
                                48: e.w1[u(474)](this[u(532)].isOnLine())
                            })
                        }, y.prototype[h(407)] = function() {
                            var b = h,
                                d = this;
                            this[b(532)][b(465)](function() {
                                var I = b;
                                d[I(657)] || (d[I(657)] = new Date()[I(605)]())
                            })
                        }, y[h(506)].packReferrers = function(b, d, I) {
                            for (var u = h, T = [this.afPrimaryReferrer, this[u(638)], this[u(640)]], E = [b, d, I], W = 0, S = 0, C = 0; C < E[u(623)]; C++) W += E[C], S += T[C].length;
                            if (S <= W) return T;
                            var R = [0, 0, 0],
                                et = [];
                            for (C = 0; C < T[u(623)]; C++) {
                                var mt = -1;
                                T[C][u(623)] >= 8 && (mt = T[C].indexOf("/", 8)), mt === -1 ? (et[C] = T[C], T[C] = "") : (et[C] = T[C].substr(0, mt), T[C] = T[C][u(514)](mt)), E[C] -= et[C].length
                            }
                            var wt = et[u(431)](),
                                lt = [];
                            for (wt[0] === wt[1] ? lt[0] = "++" : wt[0] === wt[2] && (lt[0] = "::"), wt[1] === wt[2] && (lt[1] = ";;");;) {
                                var ht = 0;
                                for (C = 0; C < T[u(623)]; C++)
                                    if (R[C] || T[C][u(623)]) R[C] || (ht = 1, et[C] += T[C][0], T[C].length !== 1 ? T[C] = T[C][u(514)](1) : T[C] = "", E[C]--, E[C] || (R[C] = 1));
                                    else {
                                        R[C] = 1;
                                        for (var ut = 0; ut < R.length; ut++)
                                            if (!R[ut]) {
                                                E[ut] += E[C], E[C] = 0;
                                                break
                                            }
                                    } if (!ht) {
                                    for (C = 0; C < T[u(623)]; C++)
                                        if (T[C][u(623)]) {
                                            for (ut = 0; ut < E[u(623)]; ut++)
                                                if (E[ut]) {
                                                    R[C] = 0, E[C] = E[ut], E[ut] = 0, ht = 1;
                                                    break
                                                } if (ht) break
                                        }
                                }
                                if (!ht) break
                            }
                            for (var C in lt) u(502) != typeof et[C] && (et[C] = ""), et[C] = et[C][u(559)](wt[C])[u(427)](lt[C]);
                            return et
                        }, y[h(506)][h(396)] = function() {
                            var b = h,
                                d = this[b(532)][b(446)]();
                            this[b(522)] = d[b(570)] + "|" + d[b(654)] + "|" + d[b(599)]
                        }, y[h(506)][h(501)] = function(b, d) {
                            var I = h,
                                u = this.domExtractor[I(395)](b),
                                T = this[I(532)][I(449)](d);
                            this[I(428)] = parseInt(u.x) + "|" + parseInt(u.y) + "|" + parseInt(T.x) + "|" + parseInt(T.y)
                        }, y[h(506)][h(615)] = function(b) {
                            var d = h,
                                I = this[d(532)][d(454)](b);
                            this[d(655)] = parseInt(I[d(362)]) + "|" + parseInt(I[d(510)]) + "|" + parseInt(I[d(366)]) + "|" + parseInt(I[d(371)])
                        }, y.prototype[h(635)] = function() {
                            var b = h,
                                d = this;
                            e.ju[b(671)](this.config[b(652)][b(509)], b(476), function(I) {
                                var u = b;
                                I || (I = d[u(452)][u(652)][u(627)]), d[u(452)].context[u(391)](d[u(537)] || void 0), d[u(537)] = d[u(452)][u(652)][u(374)](function() {
                                    var T = u;
                                    d[T(590)] === null && (d.miliSecondsFromScroll = 0), d[T(590)]++
                                }, 100)
                            }), this[b(532)][b(660)](function(I) {
                                d.afDeviceOrientation = I
                            }), this[b(532)].generateBatteryInfo(function(I, u) {
                                var T = b;
                                d[T(561)] = I, d[T(421)] = u
                            })
                        }, y.prototype[h(610)] = function() {
                            var b = h,
                                d;
                            this[b(452)].cookieStorage.sharedCookieStorage[b(403)] === void 0 ? (this.afPrimaryReferrer = e.Ld[b(358)](this[b(452)][b(652)][b(509)][b(550)], 500), this.config.cookieStorage[b(689)].svspr = this[b(383)], this[b(452)][b(458)][b(526)]()) : this[b(383)] = this[b(452)][b(458)][b(689)][b(403)], this[b(452)][b(652)].hasOwnProperty(b(634)) ? this[b(638)] = this[b(452)].context[b(634)] : this.afReferrer = this.config[b(652)][b(509)][b(550)], this[b(640)] = this[b(452)][b(652)][b(509)].location[b(400)], d = this[b(452)].afShortEnabled ? this[b(677)](70, 50, 50) : this[b(677)](300, 300, 300), this[b(383)] = e.w1[b(453)](e.Ld[b(358)](d[0], 256)), this.afReferrer = e.w1[b(453)](e.Ld[b(358)](d[1], 256)), this.afHref = e.w1[b(453)](e.Ld[b(358)](d[2], 256))
                        }, y[h(506)][h(616)] = function() {
                            var b = h;
                            if (this[b(452)][b(458)][b(689)][b(562)] !== void 0) {
                                this.afDeepSession = this[b(452)].cookieStorage[b(689)][b(562)];
                                var d = this[b(452)][b(589)] + b(551);
                                this[b(452)][b(652)][d] === void 0 && (this[b(499)]++, this[b(452)][b(652)][d] = !0)
                            } else this[b(499)] = 1;
                            this[b(452)][b(458)][b(689)][b(562)] = this[b(499)], this[b(452)][b(458)][b(526)]()
                        }, y.getParameterFromLink = function(b, d) {
                            var I = h,
                                u = b.search;
                            if (u === "") return null;
                            for (var T = u[I(372)]("?", "")[I(559)]("&"), E = 0; E < T[I(623)]; E++)
                                if (T[E][I(559)]("=")[0] === d) return T[E];
                            return null
                        }, y[h(581)] = function(b) {
                            var d = h,
                                I = "";
                            for (var u in b) I += parseInt(u) === 1 ? "c" : "f", b[d(630)](u) && (I += b[u]);
                            var T = e.w1[d(474)](e.w1.adler32(I));
                            return encodeURIComponent(I + "(" + T)
                        }, y
                    }(),
                    o = function(h) {
                        var y = a0z;
                        this.id = h.id, this.modulePrefix = h[y(589)], this[y(633)] = h[y(633)], this.cookieStorage = h.cookieStorage, this.context = h[y(652)] || window, this[y(595)] = h.root || window[y(509)], this[y(439)] = h[y(439)] || !1, this[y(533)] = h[y(533)] || 0, this[y(534)] = h.useTimePerformance || !1
                    },
                    p = function() {
                        var h = a0z;

                        function y(b) {
                            this.context = b
                        }
                        return y.prototype[h(380)] = function(b, d) {
                            var I = h;
                            I(572) == typeof navigator[I(512)] ? this[I(512)](b, d) : this[I(489)](b, d)
                        }, y[h(506)][h(489)] = function(b, d) {
                            var I = h;
                            this[I(652)][I(379)]("IMG")[I(613)] = b + "?" + e.AE[I(377)](d)
                        }, y.prototype[h(512)] = function(b, d) {
                            var I = h;
                            try {
                                navigator[I(512)](b + "?" + e.AE[I(377)](d))
                            } catch {
                                this.sendImage(b, d)
                            }
                        }, y
                    }(),
                    c = function() {
                        var h = a0z;

                        function y(b) {
                            var d = a0z,
                                I;
                            this[d(452)] = b, this[d(452)][d(652)] = this.config[d(652)] || window, this[d(452)][d(626)] = this[d(452)][d(626)] || 890857896, this.request = new p(((I = b.context) === null || I === void 0 ? void 0 : I[d(509)]) || window[d(509)])
                        }
                        return y[h(506)][h(675)] = function(b, d, I) {
                            var u = h;
                            d === void 0 && (d = ""), I === void 0 && (I = null);
                            var T = this[u(452)][u(652)].document.createElement(u(464)),
                                E = {
                                    instance: this[u(452)][u(626)],
                                    source: b
                                };
                            if (I) {
                                this.responseConfig = I;
                                var W = this[u(452)].widgetPrefix + u(662);
                                E[u(381)] = W, this[u(452)][u(652)][W] = this.anuraCallback[u(620)](this)
                            }
                            d !== "" && (E[u(392)] = d);
                            var S = e.AE[u(377)](E);
                            S += "&" + new Date()[u(605)](), T[u(527)] = u(493), T[u(647)] = !0, T[u(613)] = y[u(363)] + "?" + S, this[u(452)].context[u(509)][u(600)][u(557)](T)
                        }, y[h(506)].anuraCallback = function(b) {
                            var d = h,
                                I = this[d(452)],
                                u = this[d(602)],
                                T = this.responseConfig;
                            if (b[d(540)]() || !b.getId() && !b[d(547)]()) I[d(633)] && I[d(633)][d(641)](d(450) + b[d(540)]());
                            else {
                                var E = {
                                        instance: I[d(626)]
                                    },
                                    W = b[d(659)]();
                                W && (E.id = encodeURIComponent(W));
                                var S = b[d(547)]();
                                S && (E[d(686)] = encodeURIComponent(S));
                                var C = new XMLHttpRequest;
                                C[d(508)]("POST", y.RESULT_URL, !0), C[d(596)](d(525), d(555)), C[d(483)] = function() {
                                    var R = d,
                                        et;
                                    try {
                                        et = JSON[R(511)](this[R(554)])
                                    } catch {
                                        return void(I[R(633)] && I[R(633)][R(641)](R(365) + this[R(554)]))
                                    }
                                    if (et[R(459)]) {
                                        var mt = {
                                            composite: T.composite,
                                            showHash: T[R(667)],
                                            result: et[R(459)]
                                        };
                                        I.consentData && (mt[R(651)] = I[R(651)].consentData, mt[R(668)] = !!I[R(651)][R(668)]), u[R(380)](T[R(603)], mt)
                                    } else I[R(633)] && I[R(633)].sendData("Anura response wrong schema: " + this[R(554)])
                                }, C[d(675)](e.AE[d(377)](E))
                            }
                        }, y[h(363)] = h(663), y.RESULT_URL = h(531), y
                    }(),
                    w = function() {
                        var h = a0z;

                        function y(b) {
                            var d = a0z;
                            this[d(458)] = {}, this.sharedCookieStorage = {}, this[d(652)] = b.context || window, this.id = b.id;
                            var I = b[d(397)] || d(434),
                                u = b[d(669)] || d(479);
                            this[d(387)] = I + d(361) + (this.context[u + d(632)] ? this.context[u + "PageOffset"] : "")
                        }
                        return y.prototype.getCookie = function() {
                            var b = a0z,
                                d = this.getCookieValue();
                            d[this.id] !== void 0 ? this.cookieStorage = d[this.id] : this.cookieStorage = {}, d[0] !== void 0 ? this[b(689)] = d[0] : this[b(689)] = {}
                        }, y[h(506)].setCookie = function() {
                            var b = h,
                                d = this[b(571)]();
                            d[this.id] = this[b(458)], d[0] = this[b(689)];
                            var I = encodeURIComponent(JSON[b(631)](d));
                            this[b(652)][b(509)][b(461)] = this[b(387)] + "=" + I + ";path=/"
                        }, y.prototype[h(571)] = function() {
                            var b = h,
                                d = this.context[b(509)][b(461)].match(new RegExp(b(513) + this[b(387)] + b(530))),
                                I = {};
                            if (d) try {
                                I = JSON.parse(decodeURIComponent(d[1]))
                            } catch {}
                            return I
                        }, y
                    }(),
                    k = function() {
                        var h = a0z;

                        function y(b) {
                            var d = a0z;
                            this.options = b, this[d(442)] = "", this[d(680)] = [], this[d(643)] = new i(new o({
                                id: y.id,
                                modulePrefix: y[d(589)],
                                cookieStorage: new w({
                                    id: y.id,
                                    context: window
                                })
                            })), this[d(645)] = new c({
                                widgetPrefix: y.modulePrefix,
                                context: window
                            })
                        }
                        return y[h(506)][h(408)] = function() {
                            var b = h;
                            this[b(518)][b(611)] && this.options[b(658)] && this.sendAnura(this[b(518)][b(667)]), this.app[b(496)](), this[b(545)]()
                        }, y.prototype[h(580)] = function(b, d) {
                            var I = h,
                                u = d[I(400)].indexOf(I(435)),
                                T = d[I(400)][I(384)]("&k="),
                                E = d.href.indexOf("?");
                            u !== -1 ? d[I(400)] = d[I(400)].substr(0, u) : T !== -1 && (d[I(400)] = d[I(400)][I(514)](0, T)), this.afRealHref = d.href, this[I(385)] = d, d.href += u === -1 && E !== -1 ? "&" : "?", d[I(400)] += "k=" + this.options[I(416)] + "f" + this[I(643)].generateHash(b, d, this[I(518)][I(667)]), this[I(436)](d, I(505))
                        }, y[h(506)][h(545)] = function() {
                            var b = h,
                                d = this;
                            this[b(443)](document[b(556)]("a")), setTimeout(function() {
                                var I = b;
                                return d[I(545)]()
                            }, 750)
                        }, y[h(506)][h(443)] = function(b) {
                            for (var d = h, I = this, u = 0; u < b[d(623)]; u++) {
                                var T = b[u];
                                this[d(680)][d(384)](T) === -1 && (this[d(680)][d(426)](T), new RegExp("/(ghits|[prt]+news|nr)/", "i")[d(495)](T[d(400)]) && (e.ju[d(671)](T, d(639), function(E) {
                                    var W = d;
                                    I[W(568)](E, this)
                                }), e.ju[d(671)](T, d(477), function(E) {
                                    var W = d;
                                    I[W(646)](E, this)
                                }), e.ju[d(671)](T, d(399), function(E) {
                                    var W = d;
                                    I[W(618)](E, this)
                                }), e.ju.addEvent(T, d(441), function(E) {
                                    I.linkMouseMove(E, this)
                                }), e.ju[d(671)](T, "touchstart", function(E) {
                                    var W = d;
                                    I[W(445)](E, this)
                                }), e.ju.addEvent(T, d(497), function(E) {
                                    var W = d;
                                    I[W(681)](E, this)
                                }), e.ju[d(671)](T, d(376), function(E) {
                                    var W = d;
                                    I[W(601)](E, this)
                                })))
                            }
                            this[d(643)][d(407)]()
                        }, y.prototype[h(436)] = function(b, d) {
                            var I = h,
                                u = document[I(673)](I(478));
                            u[I(492)](d, !0, !1), u[I(625)] = Date[I(415)](), b[I(682)](u)
                        }, y[h(506)].linkClick = function(b, d) {
                            var I = h,
                                u = this;
                            if (this.bindAntiFraudParams(b, d), this.options[I(611)]) {
                                var T = d[I(558)]("data-hash") || this.options[I(667)];
                                this[I(619)](T)
                            }
                            setTimeout(function() {
                                var E = I;
                                return u[E(409)]()
                            }, 100)
                        }, y.prototype[h(618)] = function(b, d) {
                            var I = h;
                            this.bindAntiFraudParams(b, d);
                            var u = parseInt(d[I(583)]) ? parseInt(d[I(583)]) : 0;
                            u % 2 != 1 && (d[I(583)] = u + 1)
                        }, y.prototype[h(617)] = function(b, d) {
                            var I = h,
                                u = parseInt(d[I(583)]) ? parseInt(d[I(583)]) : 0;
                            (u >> 1) % 2 != 1 && (d[I(583)] = u + 2)
                        }, y.prototype[h(445)] = function(b, d) {
                            var I = h;
                            this[I(580)](b, d);
                            var u = parseInt(d[I(583)]) ? parseInt(d["data-rel"]) : 0;
                            u >> 1 & 2 || (d[I(583)] = u + 4)
                        }, y[h(506)][h(681)] = function(b, d) {
                            var I = h,
                                u = parseInt(d[I(583)]) ? parseInt(d[I(583)]) : 0;
                            u >> 1 & 4 || (d[I(583)] = u + 8)
                        }, y[h(506)][h(568)] = function(b, d) {
                            var I = h,
                                u = parseInt(d[I(583)]) ? parseInt(d[I(583)]) : 0;
                            u >> 1 & 8 || (d[I(583)] = u + 16)
                        }, y[h(506)][h(601)] = function(b, d) {
                            var I = h,
                                u = parseInt(d["data-rel"]) ? parseInt(d["data-rel"]) : 0;
                            u >> 1 & 16 || (d[I(583)] = u + 32)
                        }, y[h(506)][h(409)] = function() {
                            var b = h;
                            this[b(442)] && this[b(385)] && (this[b(385)][b(400)] = this[b(442)])
                        }, y[h(506)].sendAnura = function(b) {
                            var d = h;
                            this[d(645)][d(675)](this[d(518)][d(486)], this.options[d(420)], {
                                composite: this[d(518)][d(416)],
                                resultUrl: this[d(518)][d(591)] + d(467),
                                showHash: b
                            })
                        }, y.modulePrefix = "Transit", y.id = h(553), y
                    }()
            })(), module[zc(470)] = K
        })()
    });
    var as = {};
    ft(as, {
        AntifraudBlock: () => Ee
    });
    var Pt, Ee, os = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Pt = Gt(ss()), Ee = class extends $ {
            constructor(e) {
                super(e), this.name = "AntifraudBlock";
                let i = '{"props":{"3":"window.close","13":"window.navigator.taintEnabled","16":"window.EventTarget.toString","18":"window.navigator.appName","20":"window.ApplicationCacheErrorEvent","22":"window.clearImmediate","23":"window.CryptoKey","25":"window.external.AddSearchProvider","32":"window.chrome.search","33":"window.clientInformation.vendor","40":"window.TouchEvent","43":"window.DeviceMotionEvent","46":"window.navigator.webkitGetGamepads","49":"window.Notification","56":"window.BeforeLoadEvent","57":"window.Entity","72":"window.AnalyserNode","74":"window.ArrayBufferView","76":"window.HTMLBaseFontElement","86":"window.self.SharedWorker","87":"window.Touch","91":"window.DOMException.ABORT_ERR","92":"window.Set","98":"window.document.createTouch","138":"window.NaN","139":"window.document.prepend","163":"window.SiteBoundCredential","165":"window.CanvasCaptureMediaStreamTrack"},"rules":{"contains":{"3":["({command:\\"window.close.self\\"})"],"18":["MicrosoftInternetExplorer"],"33":["GoogleInc."]},"not_empty":[13,16,18,20,22,23,25,32,40,43,46,49,56,57,76,86,87,91,92,98,138,139,163,165],"undefined":[25,46,72,74,87]}}',
                    o = null,
                    p = new Pt.BaseConfiguration({
                        logger: o,
                        propertiesDom: i,
                        afShortEnabled: !0,
                        modulePrefix: "MarketGidC",
                        id: this.app.id,
                        context: this.app.context,
                        root: this.app.root,
                        iframePlacementType: this.app.iframePlacementType,
                        cookieStorage: this.app.cookieBlock,
                        useTimePerformance: !1
                    });
                this.antifraud = new Pt.AntiFraud(p), this.anura = new Pt.Anura({
                    logger: o,
                    widgetPrefix: "MarketGidInfC" + this.app.getWidgetValue("id", 1435486),
                    context: this.app.context,
                    consentData: this.app.consentsBlock.getConsentData()
                }), this.app.allowReturnParams = !1, this.addHook("afterLoadNewsHooks", this.hangAFListener.bind(this)), this.addHook("afterInitHooks", this.antifraud.initialize.bind(this.antifraud))
            }
            getAntifraudParams(e, i) {
                if (this.app.allowReturnParams === !1) return "";
                i = i || this.app.context.document.createElement("A"), e = e || this.app.context.document.createEvent("MouseEvent");
                let o = i["data-hash"] || i.getAttribute("data-hash") || "";
                return this.antifraud.generateHash(e, i, o)
            }
            reWriteHref(e, i) {
                e || (e = this.app.context.event), e.target || (e.target = e.srcElement);
                let o = i["data-hash"] || i.getAttribute("data-hash");
                typeof o > "u" || i.tagName !== "A" || (i[this.app.hrefAttr] = this.app.prepareNiceHref(o, e, i))
            }
            linkMouseDown(e) {
                e || (e = this.app.context.event), e.target || (e.target = e.srcElement), this.app.allowReturnParams = !0;
                let i = e.target;
                if (i.tagName !== "A" && (i = this.app.getParentLink(i), i == null) || !i.hasAttribute("data-hash")) return;
                let o = 0;
                parseInt(i["data-rel"]) && (o = parseInt(i["data-rel"])), o >> 1 & 8 || (i["data-rel"] = o + 16), this.reWriteHref(e, i)
            }
            linkFocus(e) {
                e || (e = this.app.context.event), e.target || (e.target = e.srcElement), this.app.allowReturnParams = !0;
                let i = e.target;
                if (i.tagName !== "A" && (i = this.app.getParentLink(i), i == null) || !i.hasAttribute("data-hash")) return;
                let o = 0;
                parseInt(i["data-rel"]) && (o = parseInt(i["data-rel"])), o >> 1 & 16 || (i["data-rel"] = o + 32), this.reWriteHref(e, i)
            }
            linkClick(e) {
                e || (e = this.app.context.event), e.target || (e.target = e.srcElement), this.app.allowReturnParams = !0;
                let i = e.target;
                if (i.tagName !== "A" && (i = this.app.getParentLink(i), i == null) || !i.hasAttribute("data-hash")) return;
                this.reWriteHref(e, i);
                let o = i.getAttribute("data-hash");
                if (this.app.teaserData[o] && ["w", "e"].indexOf(this.app.teaserData[o].coopType) > -1 && (this.app.getWidgetValue("afCheckForensiq", !1) && this.addForesiqScript(o), (this.app.servicerData.anura || 0) > this.app.random(1, 100))) {
                    let p = this.app.getWidgetValue("goodsPartUid", 57767475) || this.app.getWidgetValue("newsPartUid", 57767475);
                    this.anura.send(this.getSourceId(o, p), this.getQueryParam(i, "pubsrcid"), {
                        composite: this.app.getWidgetValue("id", 1435486),
                        showHash: o,
                        resultUrl: "https://c.mgid.com/anura"
                    })
                }
                this.app.context.setTimeout(() => {
                    this.app.allowReturnParams = !1, this.reWriteHref(e, i)
                }, 100)
            }
            addForesiqScript(e) {
                let i = this.getSourceId(e, this.app.getWidgetValue("id", 1435486)),
                    o = this.app.webProtocol + "//c.securepaths.com/js/implement-r.js?sl=1&org=5reyucracrajubrac4um&p=" + i + "&a=0&cmp=" + this.app.teaserData[e][1] + "&rt=click";
                this.app.request.script("forensiq", o, {}, {
                    dest: this.app.context.document.body
                })
            }
            getSourceId(e, i) {
                {
                    let o = "ni",
                        p = this.app.getWidgetValue("goodsPartUid", 57767475);
                    return this.app.teaserData[e].coopType === "e" ? o : p
                }
                return i
            }
            linkMouseOver(e) {
                e || (e = this.app.context.event), e.target || (e.target = e.srcElement), this.app.allowReturnParams = !0;
                let i = e.target;
                if (i.tagName !== "A" && (i = this.app.getParentLink(i), i == null) || !i.hasAttribute("data-hash")) return;
                let o = 0;
                parseInt(i["data-rel"]) && (o = parseInt(i["data-rel"])), o % 2 !== 1 && (i["data-rel"] = o + 1), this.reWriteHref(e, i)
            }
            linkMouseMove(e) {
                e || (e = this.app.context.event), e.target || (e.target = e.srcElement), this.app.allowReturnParams = !0;
                let i = e.target;
                if (i.tagName !== "A" && (i = this.app.getParentLink(i), i == null) || !i.hasAttribute("data-hash")) return;
                let o = 0;
                parseInt(i["data-rel"]) && (o = parseInt(i["data-rel"])), (o >> 1) % 2 !== 1 && (i["data-rel"] = o + 2), this.reWriteHref(e, i)
            }
            linkTouchStart(e) {
                this.app.allowReturnParams = !0;
                let i = e.target;
                if (i.tagName !== "A" && (i = this.app.getParentLink(i), i == null) || !i.hasAttribute("data-hash")) return;
                let o = 0;
                parseInt(i["data-rel"]) && (o = parseInt(i["data-rel"])), o >> 1 & 2 || (i["data-rel"] = o + 4), this.reWriteHref(e, i)
            }
            linkTouchEnd(e) {
                e || (e = this.app.context.event), e.target || (e.target = e.srcElement), this.app.allowReturnParams = !0;
                let i = e.target;
                if (i.tagName !== "A" && (i = this.app.getParentLink(i), i == null) || !i.hasAttribute("data-hash")) return;
                let o = 0;
                parseInt(i["data-rel"]) && (o = parseInt(i["data-rel"])), o >> 1 & 4 || (i["data-rel"] = o + 8), this.reWriteHref(e, i)
            }
            getQueryParam(e, i) {
                let o = e.search.substring(1).split("&"),
                    p = "";
                for (let c = 0; c < o.length; c++) {
                    let w = o[c].split("=");
                    if (w[0] === i) {
                        p = decodeURIComponent(w[1]);
                        break
                    }
                }
                return p
            }
            hangAFListener(e) {
                typeof e > "u" && (e = this.app.root), this.app.addEvent(e, "mousedown", this.linkMouseDown.bind(this)), this.app.addEvent(e, "mouseup", this.linkClick.bind(this)), this.app.addEvent(e, "mouseover", this.linkMouseOver.bind(this)), this.app.addEvent(e, "mousemove", this.linkMouseMove.bind(this)), this.app.addEvent(e, "touchstart", this.linkTouchStart.bind(this)), this.app.addEvent(e, "touchend", this.linkTouchEnd.bind(this)), this.app.addEvent(e.querySelector("a[data-hash]"), "focus", this.linkFocus.bind(this)), this.antifraud.setWidgetEvents()
            }
        }
    });
    var ns = {};
    ft(ns, {
        AccidentalClicksBlock: () => Ce
    });
    var Ce, rs = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Ce = class extends $ {
            constructor(e) {
                super(e), this.name = "AccidentalClicksBlock", this.app.accidentalClicksHandler = this._onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.accidentalClicks.handler, this.app.clickHandlerList.accidentalClicks.priority), this.accidentalClicksDelay = (parseInt(this.app.globalSettings.accidental_clicks_delay) || 5) * 1e3, this.accidentalClicksDisableTypes = "wages".split(","), this.teasersClickTimes = {}
            }
            _onClick(e, i) {
                if (i.button === 2) return !0;
                let o = e.getAttribute("data-hash"),
                    p = new Date().getTime();
                if (this.app.isEnabledDoubleClick() || typeof this.app.servicerData.dc < "u" && o in this.app.hashTimer && p - this.app.hashTimer[o] < this.app.servicerData.dc) return !0;
                switch (this.app.teaserData[o].coopType) {
                    case "w":
                        if (this.accidentalClicksDisableTypes.indexOf("wages") == -1) return !0;
                        break;
                    case "e":
                        if (this.accidentalClicksDisableTypes.indexOf("exchange") == -1) return !0;
                        break;
                    case "i":
                        if (this.accidentalClicksDisableTypes.indexOf("int_exchange") == -1) return !0;
                        break;
                    default:
                        return !0
                }
                return this.teasersClickTimes.hasOwnProperty(o) ? new Date().getTime() - this.teasersClickTimes[o] <= this.accidentalClicksDelay ? (i.preventDefault(), this.app.doubleClickType = "accidental", this.app.doubleClickHandler(e), !1) : (this.teasersClickTimes[o] = new Date().getTime(), !0) : (this.teasersClickTimes[o] = new Date().getTime(), !0)
            }
        }
    });
    var ps = {};
    ft(ps, {
        ActivateDelayBlock: () => We
    });
    var We, cs = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        We = class extends $ {
            constructor(e) {
                super(e), this.name = "ActivateDelayBlock", this.app.clickableDelay = !1, this.eventDisabled = !1, this.addHook("afterLoadNewsHooks", this._init), this.app.activateDelayLinkHandler = this._onClick.bind(this)
            }
            isCloseLink(e) {
                return e.classList.contains("mg-close-button-div-inner")
            }
            isWagesLink(e) {
                if (!e) return !1;
                let i = e.getAttribute("data-hash");
                return this.app.teaserData[i] && this.app.teaserData[i].coopType === "w"
            }
            _init() {
                if (this.isInited) return;
                this.isInited = !0;
                let e = parseInt(2e3);
                this.app.addClickHandler(this.app.clickHandlerList.activateDelayLink.handler, this.app.clickHandlerList.activateDelayLink.priority), this.app.context.setTimeout(() => {
                    this.eventDisabled = !0, this.app.linksBlocked = !1, this.app.clickableDelay = !1
                }, e)
            }
            _onClick(e, i) {
                return this.eventDisabled || this.app.clickableDelay && this.isWagesLink(e) || this.isCloseLink(e) || typeof this.app.servicerData.dc < "u" ? !0 : (this.app.doubleClickType = "delay", this.app.doubleClickHandler(e), this.app.linksBlocked = !0, i.preventDefault(), !1)
            }
        }
    });
    var hs = {};
    ft(hs, {
        MonitorBlock: () => Se
    });
    var Se, ls = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Se = class extends $ {
            constructor(e) {
                super(e), this.name = "MonitorBlock", this.shownBlocks = {}, this.monitorTimeout = null, this.isFirstByType = {}, this.isFirstByCid = {}, this.addHook("beforeInjectTemplateHooks", this._init.bind(this))
            }
            _init() {
                if (typeof this.VisData != "function") {
                    let o = !0,
                        p = this.app.context.self;
                    try {
                        this.app.context.self !== this.app.context.top && this.app.context.top.location.href && (p = this.app.context.top)
                    } catch {
                        o = !1
                    }
                    this.VisData = (() => {
                        try {
                            if (!o) return bt => bt ? {
                                extTf: !1
                            } : !0;
                            let c, w, k = {
                                hidden: "visibilitychange",
                                webkitHidden: "webkitvisibilitychange",
                                mozHidden: "mozvisibilitychange",
                                msHidden: "msvisibilitychange"
                            };
                            for (c in k)
                                if (c in document) {
                                    w = k[c];
                                    break
                                } let h = -1,
                                y = -1,
                                b = -1,
                                d = 1,
                                I = !1,
                                u, T, E, W, S, C = typeof document.hasFocus == "function" ? () => {
                                    let bt = p.document.hasFocus();
                                    bt != d && (u = new Date().getTime()), I |= bt, d = bt
                                } : () => {
                                    d = 1
                                };
                            setInterval(C, 100), this.app.addEvent(p.document, w, () => {
                                p.document[c] ? h = 0 : setTimeout(() => {
                                    h = 1
                                }, 100), S = new Date().getTime()
                            }), this.app.addEvent(p.document, "mouseleave", () => {
                                b = 0, T = new Date().getTime()
                            }), this.app.addEvent(p.document, "mouseenter", () => {
                                b = 1, T = new Date().getTime()
                            }), this.app.addEvent(p.document, "touchmove", () => {
                                b = 2, T = new Date().getTime()
                            });
                            let R = 0;
                            this.app.addEvent(p.document, "keydown", () => {
                                R = 1, E = new Date().getTime()
                            });
                            let et = 0,
                                mt = 0;
                            this.app.addEvent(p.document, "click", bt => {
                                mt = 1, et = new Date().getTime();
                                let xt = bt.target;
                                for (; xt.parentElement;)
                                    if (xt.tagName === "A") {
                                        mt = 2;
                                        break
                                    } else xt = xt.parentElement
                            }), this.app.addEvent(p, "blur", () => {
                                p.document.activeElement && p.document.activeElement.tagName == "IFRAME" ? y = 2 : y = 0, W = new Date().getTime()
                            }), this.app.addEvent(p, "focus", () => {
                                y = 1, W = new Date().getTime()
                            });
                            let wt = 0,
                                lt = null,
                                ht = () => {
                                    lt = new Date().getTime(), wt = 1
                                };
                            p.document.addEventListener ? (p.document.addEventListener("mousewheel", ht, !1), p.document.addEventListener("DOMMouseScroll", ht, !1)) : p.document.attachEvent("onmousewheel", ht);
                            let ut = 0;
                            try {
                                let bt = new Image;
                                bt.__defineGetter__("id", () => {
                                    ut = 1
                                }), console.debug(bt)
                            } catch {
                                ut = -1
                            }
                            return bt => {
                                C();
                                let xt = d && (h !== 0 || y !== 0 || b !== -1 || wt);
                                if (bt) {
                                    let gt = {
                                            extVs: xt,
                                            extTv: h,
                                            extWv: y,
                                            extMa: b,
                                            extHf: d,
                                            extCl: mt,
                                            extKp: R,
                                            extMw: wt,
                                            extDg: ut,
                                            extFt: I
                                        },
                                        kt = new Date().getTime();
                                    return et && (gt.extClt = kt - et), lt && (gt.extMwt = kt - lt), W && (gt.extWvt = kt - W), T && (gt.extMat = kt - T), S && (gt.extTvt = kt - S), u && (gt.extHft = kt - u), E && (gt.extKpt = kt - E), gt
                                }
                                return xt
                            }
                        } catch {
                            return w => w ? {} : !0
                        }
                    })()
                }
                let e = /([A-Za-z0-9\-_\*]{64})/,
                    i = parseFloat(this.app.globalSettings.capping_observer_threshold);
                if ((!i || i <= 0 || i > 1 || Number(i) != i) && (i = .9), typeof IntersectionObserver == "function" && this.app.servicerData.cv === 3) {
                    let p = 0,
                        c = 0,
                        w = [],
                        k = null,
                        h = () => {
                            let u = 0;
                            for (let T = 0; T < w.length; T++) w[T] && (w[T].dataset.shown ? u++ : w[T].dataset.observeStart > 0 && parseFloat(w[T].dataset.observeTime) + (new Date().getTime() - w[T].dataset.observeStart) > 1e3 && (this.app.intersectionObserver.unobserve(w[T]), this.app.intersectionObserver.observe(w[T])));
                            u < p && setTimeout(h, 100)
                        };
                    if (!this.app.intersectionObserver) {
                        let u = T => {
                            let E = {},
                                W = 0;
                            for (let S = 0; S < T.length; S++) {
                                let C = T[S];
                                if (!(!C.target.dataset.i || C.target.dataset.shown)) {
                                    if (C.target.width + C.target.height == 0) {
                                        this.app.intersectionObserver.unobserve(C.target), (() => {
                                            let R = C.target;
                                            setTimeout(() => {
                                                this.app.intersectionObserver.observe(R)
                                            }, 100)
                                        })();
                                        continue
                                    }
                                    if (C.intersectionRatio >= i)
                                        if (C.target.dataset.observeStart == 0) C.target.dataset.observeStart = new Date().getTime();
                                        else {
                                            let R = new Date().getTime() - C.target.dataset.observeStart;
                                            C.target.dataset.observeTime = parseFloat(C.target.dataset.observeTime) + R
                                        }
                                    else C.target.dataset.observeTime = 0, C.target.dataset.observeStart = 0;
                                    C.target.dataset.observeTime >= 1e3 && (C.target.dataset.shown = 1, this.app.intersectionObserver.unobserve(C.target), E[C.target.dataset.i] = this._getTeaserCappingData(C.target), W++)
                                }
                            }
                            W && this._prepareCappingData(E, this.app.servicerData.cv)
                        };
                        this.app.intersectionObserver = new IntersectionObserver(u, {
                            threshold: [0, i, 1]
                        })
                    }
                    let y = [],
                        b = null,
                        d = () => {
                            k || (k = setTimeout(h, 100)), b = null;
                            for (let u = y.pop(); u; u = y.pop()) this.app.intersectionObserver.observe(u)
                        },
                        I = u => {
                            y.push(u), w.push(u), p++, b && clearTimeout(b), p < c ? b = setTimeout(d, 100) : d()
                        };
                    (() => {
                        let u = "";
                        if (this.app.templateContent === "" ? u = this.app.root.getElementsByClassName("mgline") : u = this.app.templateContent.getElementsByClassName("mgline"), u.length) {
                            for (let T = 0; T < u.length; T++)
                                if (!u[T].dataset.observing) {
                                    let E = e.exec(u[T].dataset.i);
                                    if (E && E[1]) {
                                        u[T].dataset.observeTime = 0, u[T].dataset.observeStart = 0, u[T].dataset.observing = "yes";
                                        let W = u[T].querySelector("img.mcimg");
                                        W ? ((S, C) => {
                                            this.app.addEvent(C, "load", () => {
                                                S.dataset.completeFired || (S.dataset.loadFired = !0, I(S))
                                            }), this.app.addEvent(C, "error", () => {
                                                S.dataset.completeFired || I(S)
                                            }), setTimeout(() => {
                                                C.complete && !S.dataset.loadFired && (S.dataset.completeFired = !0, I(S))
                                            }, 50)
                                        })(u[T], W) : I(u[T]), c++
                                    } else u[T].dataset.observing = "no"
                                }
                        }
                    })()
                } else if (!this.monitorTimeout) {
                    let o = () => {
                        let p = {},
                            c = "";
                        this.app.templateContent && (c = this.app.templateContent.getElementsByClassName("mgline")), c.length || (c = this.app.root.getElementsByClassName("mgline"));
                        let w = [];
                        for (let k = 0; k < c.length; k++) {
                            let h = e.exec(c[k].dataset.i);
                            if (h && h[1] && !this.shownBlocks[c[k].dataset.i])
                                if (c[k].dataset.observing) w.push(c[k]);
                                else {
                                    let y = c[k].querySelector("img.mcimg");
                                    y ? ((b, d) => {
                                        this.app.addEvent(d, "load", () => {
                                            b.dataset.observing = "yes"
                                        }), this.app.addEvent(d, "error", () => {
                                            b.dataset.observing = "yes"
                                        }), setTimeout(() => {
                                            d.complete && (b.dataset.observing = "yes")
                                        }, 50)
                                    })(c[k], y) : c[k].dataset.observing = "yes"
                                }
                        }
                        for (let k = 0; k < w.length; k++) {
                            let h = w[k];
                            this._elementViewportIntersection(h) >= i && (p[h.dataset.i] = this._getTeaserCappingData(h))
                        }
                        this._prepareCappingData(p, "2"), this.monitorTimeout = setTimeout(o, 1e3)
                    };
                    o()
                }
            }
            _getTeaserCappingData(e) {
                let i = this.app.utils.getRect(e, !0);
                return {
                    width: Math.round(i.width),
                    height: Math.round(i.height),
                    atf: i.top < this.app.utils.getViewportSize().height,
                    align: this._getTeaserAlign(i),
                    desc: this._isTeaserElementVisible(e, "mcdesc"),
                    price: this._isTeaserElementVisible(e, "mcprice"),
                    domain: this._isTeaserElementVisible(e, "mcdomain")
                }
            }
            _prepareCappingData(e, i) {
                let o = [],
                    p = [],
                    c = [],
                    w = [];
                this.app.lifeCycleBlock.processHooks("beforePrepareCappingDataHooks");
                for (let k in e) {
                    let h = k;
                    if (this.shownBlocks[h]) continue;
                    let y = e[k].width + "|" + e[k].height + "|" + ((e[k].desc ? 1 : 0) + (e[k].price ? 2 : 0) + (e[k].domain ? 4 : 0) + (e[k].atf ? 8 : 0) + (e[k].align == "right" ? 16 : 0) + (e[k].align == "left" ? 32 : 0)) + "|";
                    if (h && this.app.teaserData[h]) {
                        this.shownBlocks[h] = 1;
                        let b = this.app.teaserData[h].coopType;
                        this.app.teaserData[h].ch && this.app.teaserData[h].ccid && this.app.teaserData[h].cdomain && (c = this._prepareMultiCappingData(c, h, y, b, i), w = c.counter, w[b][this.app.teaserData[h].cdomain] > 20 && (this._multiSendCappingData(c[b]), c[b] = [], w = [])), o = this._prepareSingleCappingData(o, h, y, b, i), p = o.counter, p[b] > 20 && (this._sendCappingData(o[b]), o[b] = "", p[b] = 0); {
                            let d = this.app.teaserData[h].imp;
                            for (let I of d) this.app.countersBlock.sendCustomCounter(I)
                        }
                        b === "w" && this.app.sspDoubleClickHash.push(h), this.app.lifeCycleBlock.processHooks("afterPrepareCappingDataHooks", [h])
                    }
                }
                for (let k in p) p[k] > 0 && this._sendCappingData(o[k]);
                for (let k of Object.keys(w)) {
                    let h = w[k];
                    Object.keys(w[h]).length > 0 && this._multiSendCappingData(c[h])
                }
            }
            _sensorsToJsFlags() {
                let e = 0;
                try {
                    let i = this.VisData(!0),
                        o = 1500;
                    if (i) {
                        if (i.extTf === !1) return 3;
                        i.extVs === 1 && (e = 1), i.extHf && (e += 2), i.extWv < 0 ? e += 3 << 2 : i.extWv < 3 && (e += i.extWv << 2), i.extTv < 0 ? e += 3 << 4 : i.extTv < 3 && (e += i.extTv << 4), i.extMa < 0 ? e += 3 << 6 : i.extMa < 3 && (e += i.extMa << 6), i.extCl > 0 && i.extCl < 3 && (e += i.extCl << 8), i.extMw == 1 && (e += 1 << 10), i.extKp == 1 && (e += 1 << 11), i.extDg != 0 && (e += 1 << 12), i.extMa != 2 && i.extMw == 1 && i.extMwt < o && (e += 1 << 13), Number(i.extHft) === i.extHft && i.extHft >= 0 && i.extHft < o && (!i.extWvt || i.extWvt < o) && (!i.extTvt || i.extTvt < o) && (e += 1 << 14), i.extFt && (e += 1 << 15), e = e << 1
                    }
                } catch {
                    e = 1
                }
                return e
            }
            _prepareMultiCappingData(e, i, o, p, c) {
                let w = this.app.teaserData[i].cdomain,
                    k = this.app.teaserData[i].ch,
                    h = this.app.teaserData[i].ccid,
                    y = "pv=" + c;
                return y.indexOf("extjs") == -1 && (y += "&extjs=" + this._sensorsToJsFlags()), typeof e[p] > "u" && (e[p] = [], typeof e.counter > "u" && (e.counter = []), typeof e.counter[p] > "u" && (e.counter[p] = [])), typeof e[p][w] > "u" && (e[p][w] = [], e.counter[p][w] = 0), typeof e[p][w][h] > "u" && (e[p][w][h] = ""), y += "&v=" + o + k, (c != "0" && !this.isFirstByType[p + h] || !this.isFirstByCid[p + h]) && (y += "&f" + p + "=1", this.isFirstByType[p + h] = 1, this.isFirstByCid[p + h] = 1), e[p][w][h] += y, e.counter[p][w]++, e
            }
            _prepareSingleCappingData(e, i, o, p, c) {
                return typeof e[p] > "u" && (e[p] = "pv=" + c, typeof e.counter > "u" && (e.counter = [])), typeof e.counter[p] > "u" && (e.counter[p] = 0), e[p] += "&v=" + o + i, c != "0" && !this.isFirstByType[p] && (e[p] += "&f" + p + "=1", this.isFirstByType[p] = 1), e[p].indexOf("extjs") == -1 && (e[p] += "&extjs=" + this._sensorsToJsFlags()), e.counter[p]++, e
            }
            _multiSendCappingData(e) {
                for (let i in e)
                    if (e.hasOwnProperty(i)) {
                        for (let o in e[i])
                            if (e[i].hasOwnProperty(o)) {
                                let p = e[i][o] + "&cid=" + o;
                                this._sendCappingData(p, i)
                            }
                    }
            }
            _sendCappingData(e, i) {
                let o = e.search("&cid="),
                    p = e.search("pv=0&") >= 0,
                    c;
                if (o != -1 && (c = e.substr(o + 5).split("&")[0]), p ? typeof c > "u" && (e += "&cid=" + this.app.id.toString()) : ((typeof this.app.context._mgwcapping > "u" || this.app.context._mgwcapping.indexOf(this.app.id.toString()) == -1 || typeof c < "u" && this.app.context._mgwcapping.indexOf(c.toString()) == -1) && (e = "f=1&" + e), this.app.context._mgwcapping = this.app.context._mgwcapping || [], typeof c > "u" ? (e += "&cid=" + this.app.id.toString(), this.app.context._mgwcapping.push(this.app.id.toString())) : this.app.context._mgwcapping.push(c)), this.app.pagesServicerData.length) {
                    let y = "",
                        b = null,
                        d = e.split("&").filter(I => I.indexOf("v=") === 0)[0];
                    if (d && (y = d.split("|").filter((I, u, T) => I === T[T.length - 1])[0]), y && this.app.teaserData[y]) {
                        let I = this.app.pagesServicerData.filter(u => u.page === this.app.teaserData[y].page)[0];
                        b = typeof I < "u" ? I.servicerData : null
                    }
                    b && b.h2 && (e += "&h2=" + b.h2), b && b.rid && (e += "&rid=" + b.rid), b && b.tt && (e += "&tt=" + b.tt), b && b.ts && (e += "&ts=" + b.ts), b && b.psid && (e += "&psid=" + b.psid), b && b.iv && (e += "&iv=" + b.iv)
                }
                let w = 0;
                if (this.app.context["isFBIA" + 1435486] && this.app.context.localStorage) {
                    let y = this.app.context.localStorage.getItem("_mgPageImp" + 872416),
                        b = this.app.globalSettings.ia_page_imp_timeout || 180;
                    (!y || new Date().getTime() - y > b * 1e3) && (this.app.context.localStorage.setItem("_mgPageImp" + 872416, new Date().getTime()), w = 1)
                } else {
                    let y = this.app.getMostTopWindow(),
                        b = y.location.pathname;
                    y["_mgPageImp" + 872416] = y["_mgPageImp" + 872416] || [];
                    let d = y["_mgPageImp" + 872416];
                    Array.isArray(d) && d.indexOf(b) === -1 && (d.push(b), w = 1)
                }
                e += "&pageImp=" + w, e += "&pvid=" + this.app.pvid;
                try {
                    if (this.app.context.localStorage) {
                        let y = this.app.context.localStorage.getItem("mgMuidn");
                        typeof y == "string" && y.length > 0 && (this.app.muid = y, e += "&muid=" + y)
                    }
                } catch {}
                let k = this.app.webProtocol + "//";
                typeof i < "u" ? k += i : k += "c.mgid.com", e += "&" + this.app.getCbusterParameter();
                let h = this.app.consentsBlock.getConsentData();
                h && Object.keys(h).forEach(y => {
                    let b = h[y];
                    e += `&${y}=${b}`
                }), this.app.request.pixel("capping", `${k}/c?${e}`, {}, {}), this.app.lifeCycleBlock.processHooks("afterSendCappingHooks")
            }
            _getTeaserAlign(e) {
                let i = this.app.context.document.body.scrollWidth;
                return e.right < .3 * i ? "left" : e.left >= .7 * i ? "right" : "center"
            }
            _isTeaserElementVisible(e, i) {
                let o = e.getElementsByClassName(i);
                if (o.length > 0) {
                    let p = o[0].getBoundingClientRect();
                    return !(p.right - p == 0 || p.bottom - p.top == 0)
                } else return !1
            }
            _elementViewportIntersection(e) {
                let i = this.app.utils.getRect(e, !0);
                for (let y in i) i.hasOwnProperty(y) && (i[y] = Math.floor(i[y]));
                let o = this.app.utils.getViewportSize(),
                    p = this.app.utils.getScroll();
                o.top = p.top, o.bottom = p.top + o.height, o.left = p.left, o.right = p.left + o.width;
                let c = i.width * i.height;
                if (!c) return 0;
                let w = Math.max(0, Math.min(i.right, o.right) - Math.max(i.left, o.left)),
                    k = Math.max(0, Math.min(i.bottom, o.bottom) - Math.max(i.top, o.top));
                return w * k / c
            }
        }
    });
    var ds = {};
    ft(ds, {
        HideDescriptionBlock: () => Pe
    });
    var Pe, fs = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Pe = class extends $ {
            constructor(e) {
                super(e), this.name = "HideDescriptionBlock", typeof this.app.afterAutoplacementHooks < "u" && this.app.widgetConstructorData.autoplacement !== "off" ? this.addHook("afterAutoplacementHooks", this.hideDescription) : this.addHook("afterLoadNewsHooks", this.hideDescription)
            }
            hideDescription() {
                let e = this.app.root.querySelector(".mcdesc");
                if (!e) return;
                let i = this.app.root.querySelector(".mcdesc > a"),
                    o = this.app.root.querySelector(".mglbtn"),
                    p = this.app.root.querySelector(".mglbtn > a"),
                    c = this.app.root.querySelector("div.mcimg"),
                    w = this.app.root.querySelector(".image-with-text"),
                    k = i.scrollHeight - i.clientHeight,
                    h = o.clientWidth,
                    y = c.clientWidth,
                    b = w.clientWidth;
                b - y - 15 - h - 15 < 0 && (b !== y ? p.innerHTML = this.app.getTranslation("[INFORMER_CTA_LEARN_MORE]") + "<span></span>" : o.clientHeight > 75 && (p.innerHTML = this.app.getTranslation("[INFORMER_CTA_LEARN_MORE]") + "<span></span>"), h < 135 && (p.innerHTML = "<span></span>")), k > 1 && (e.style.display = "none")
            }
        }
    });
    var us = {};
    ft(us, {
        CollectViewDataBlock: () => _e
    });
    var yt, _e, gs = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        (function(D) {
            D.widgetOutOfSight = "widget_out_of_sight", D.leavePage = "user_change_tab_or_close_site", D.widgetOverLimitTime = "widget_over_limit_time", D.siteOverLimitTime = "site_over_limit_time", D.newWidgetPage = "new_widget_page", D.newSitePage = "new_site_page"
        })(yt || (yt = {}));
        _e = class extends $ {
            constructor(e) {
                super(e), this.keyHash = "_mgUniqueHash", this.keyUserPages = "_mgUserPages", this.timeOutLimit = 30, this.viewMinTime = 1, this.muidn = "", this.widget = {
                    isVisible: !1,
                    isStartView: !1,
                    startingViewTime: 0,
                    requestsList: []
                }, this.teasersList = [], this.teasersVisibleList = [], this.acceptableTeaserTypes = ["type-w", "type-i", "mgline-banner"], this.acceptableSiteEvents = [yt.leavePage, yt.newSitePage, yt.siteOverLimitTime], this.name = "CollectViewDataBlock", !this.app.isAmp() && !this.app.isIframe() && this.init()
            }
            init() {
                if (this.currentPath = this.app.context.document.location.pathname, typeof this.app.context[this.keyUserPages] > "u") {
                    this.app.context[this.keyUserPages] = [];
                    let e = Math.round(this.app.context.performance?.timeOrigin) || this.app.context.performance.timing.navigationStart,
                        i = {
                            pathname: this.currentPath,
                            href: this.app.context.document.location.href,
                            startingViewTime: e,
                            isOverLimitTime: !1
                        };
                    this.app.context[this.keyUserPages].push(i)
                }
                setInterval(() => {
                    this.detectUrlChanged(), this.detectTimeOverLimit()
                }, 1e3), this.setupLeavePageEvents(), this.addHook("afterLoadNewsHooks", this.startObserving)
            }
            detectUrlChanged() {
                if (this.currentPath !== this.app.context.document.location.pathname) {
                    this.sendAnalyticsData(yt.newSitePage), this.currentPath = this.app.context.document.location.pathname;
                    let e = this.getCurrentPage();
                    if (!e) {
                        let i = {
                            pathname: this.currentPath,
                            href: this.app.context.document.location.href,
                            startingViewTime: new Date().getTime(),
                            isOverLimitTime: !1
                        };
                        this.app.context[this.keyUserPages].push(i)
                    }
                    e && e.startingViewTime === 0 && this.updateCurrentUserPage({
                        startingViewTime: new Date().getTime(),
                        href: this.app.context.document.location.href
                    })
                }
            }
            detectTimeOverLimit() {
                let e = this.getCurrentPage();
                e && !e.isOverLimitTime && e.startingViewTime > 0 && this.isTimeOverLimit(new Date().getTime() - e.startingViewTime) && (this.updateCurrentUserPage({
                    isOverLimitTime: !0
                }), this.sendAnalyticsData(yt.siteOverLimitTime)), this.widget.isStartView && this.isTimeOverLimit(new Date().getTime() - this.widget.startingViewTime) && this.sendAnalyticsData(yt.widgetOverLimitTime)
            }
            setupLeavePageEvents() {
                let i = ["hidden", "mozHidden", "msHidden", "webkitHidden"].filter(p => typeof this.app.context.document[p] < "u")[0],
                    o = i === "hidden" ? "visibilitychange" : i.replace("Hidden", "") + "visibilitychange";
                this.app.context.document.addEventListener(o, () => {
                    if (this.app.context.document[i] && this.sendAnalyticsData(yt.leavePage), this.widget.isVisible && !this.app.context.document[i] && this.restartTeasersViewTime(), !this.app.context.document[i]) {
                        let p = this.getCurrentPage();
                        p && p.startingViewTime === 0 && this.updateCurrentUserPage({
                            startingViewTime: new Date().getTime()
                        })
                    }
                }), this.app.context.addEventListener("beforeunload", () => {
                    this.sendAnalyticsData(yt.leavePage)
                })
            }
            startObserving() {
                let e = {
                    page: this.app.pagesServicerData.length,
                    requestId: this.app.servicerData.rid
                };
                this.widget.requestsList.push(e);
                let i = typeof this.app.context[this.keyHash + this.app.id + "_" + this.app.uniqId] < "u";
                i && this.widget.isStartView && (this.sendAnalyticsData(yt.newWidgetPage), this.teasersVisibleList.length ? this.restartTeasersViewTime() : (this.widget.isStartView = !0, this.widget.startingViewTime = new Date().getTime())), i || (this.app.context[this.keyHash + this.app.id + "_" + this.app.uniqId] = this.app.utils.generateHash(), this.addHook("observerTeasersHooks", this.teasersObserving), this.addHook("observerWidgetHooks", this.widgetObserving))
            }
            teasersObserving(e, i, o, p, c) {
                let w, k;
                if (p && c && (w = c + "-" + p, k = this.teasersList.filter(h => h.order === w)[0]), o === 0 && w && k && k.isVisible && (this.teasersList = this.teasersList.map(h => {
                        if (h.order === w) {
                            let y = new Date().getTime() - h.startingViewTime,
                                b = h.viewTime ? h.viewTime + y : y;
                            return {
                                ...h,
                                viewTime: b,
                                isVisible: !1,
                                startingViewTime: 0
                            }
                        } else return h
                    })), o > .5) {
                    if (this.widget.isVisible = !0, this.widget.isStartView || (this.widget.isStartView = !0, this.widget.startingViewTime = new Date().getTime()), !k && w && e && p && c) {
                        let h = {
                            order: w,
                            iteration: p,
                            page: c,
                            isVisible: !0,
                            startingViewTime: new Date().getTime(),
                            viewTime: 0,
                            requestId: this.widget.requestsList.filter(y => y.page === c)[0]?.requestId,
                            showHash: e.dataset.i || "",
                            className: e.className
                        };
                        this.teasersList.push(h)
                    }
                    k && !k.isVisible && w && (this.teasersList = this.teasersList.map(h => h.order === w ? {
                        ...h,
                        isVisible: !0,
                        startingViewTime: new Date().getTime()
                    } : h))
                }
                this.teasersList.length && this.teasersList.every(h => !h.isVisible)
            }
            widgetObserving(e, i) {
                typeof e < "u" && !e && (this.sendAnalyticsData(yt.widgetOutOfSight), this.widget.isVisible = !1)
            }
            sendAnalyticsData(e) {
                let i;
                if (this.widget.isStartView) {
                    let c = new Date().getTime() - this.widget.startingViewTime;
                    this.isTimeMoreMinLimit(c) && (i = i || {}, i.widget_data = this.preparedWidgetData(e)), this.widget.isStartView = !1, this.widget.startingViewTime = 0
                }
                if (this.teasersList.some(c => c.viewTime > 0 || c.isVisible)) {
                    this.teasersVisibleList = this.teasersList.filter(w => w.isVisible);
                    let c = this.preparedTeasersData();
                    c.length && (i = i || {}, i.teasers_data = c), this.resetTeasersViewTime()
                }
                let o = this.getCurrentPage(),
                    p = this.acceptableSiteEvents.some(c => c === e);
                if (o && p && o.startingViewTime > 0) {
                    let c = new Date().getTime() - o.startingViewTime;
                    this.isTimeMoreMinLimit(c) && (i = i || {}, i.user_data = this.preparedUserData(o)), this.updateCurrentUserPage({
                        startingViewTime: 0
                    })
                }
                if (i && Object.keys(i).length && this.isMuidn()) {
                    i.event_name = e;
                    let c = new Blob([JSON.stringify(i)], {
                        type: "text/plain"
                    });
                    this.app.request.beaconBlob("visibility", this.app.webProtocol + "//c.mgid.com/vz", c, {})
                }
            }
            preparedWidgetData(e) {
                let i = {
                        composite_id: this.app.id,
                        device: this.app.servicerData.dt,
                        muidn: this.getMuidn(),
                        session_id: this.app.context.sessionStorage.getItem("MG_Session_Id"),
                        unique_hash: this.app.context[this.keyHash + this.app.id + "_" + this.app.uniqId],
                        visible_time: new Date().getTime() - this.widget.startingViewTime
                    },
                    o = this.teasersList.filter(p => p.viewTime > 0 || p.isVisible).map(p => p.requestId).filter((p, c, w) => w.indexOf(p) === c);
                return e === yt.newWidgetPage ? (i.request_id = this.widget.requestsList[this.widget.requestsList.length - 2]?.requestId, o.length >= 2 && (i.first_request_id = this.widget.requestsList[0]?.requestId), i) : (o.length === 1 ? i.request_id = o[0] : o.length >= 2 ? (i.request_id = this.widget.requestsList[this.widget.requestsList.length - 1]?.requestId, i.first_request_id = this.widget.requestsList[0]?.requestId) : i.request_id = this.app.servicerData.rid, i)
            }
            preparedTeasersData() {
                return this.teasersList.map(e => {
                    if (e.isVisible) {
                        let i = new Date().getTime() - e.startingViewTime,
                            o = e.viewTime ? e.viewTime + i : i;
                        return {
                            ...e,
                            viewTime: o
                        }
                    } else return e
                }).filter(e => this.isTimeMoreMinLimit(e.viewTime) && this.acceptableTeaserTypes.some(i => e.className.indexOf(i) !== -1) && e.showHash.length && e.showHash !== "undefined").map(e => ({
                    composite_id: this.app.id,
                    show_hash: e.showHash,
                    muidn: this.getMuidn(),
                    request_id: e.requestId,
                    visible_time: e.viewTime
                }))
            }
            preparedUserData(e) {
                let i = new Date().getTime() - e.startingViewTime;
                return {
                    muidn: this.getMuidn(),
                    page_view_id: this.getPvid(),
                    page_url: e.href,
                    visible_time: i
                }
            }
            resetTeasersViewTime() {
                this.teasersList = this.teasersList.map(e => ({
                    ...e,
                    viewTime: 0,
                    isVisible: !1,
                    startingViewTime: 0
                }))
            }
            restartTeasersViewTime() {
                this.teasersVisibleList.forEach(e => {
                    this.teasersObserving(null, !0, 1, e.iteration, e.page)
                }), this.teasersVisibleList = []
            }
            updateCurrentUserPage(e) {
                this.app.context[this.keyUserPages] = this.app.context[this.keyUserPages].map(i => i.pathname === this.currentPath ? {
                    ...i,
                    ...e
                } : i)
            }
            isMuidn() {
                if (this.app.context.localStorage) {
                    let e = this.app.context.localStorage.getItem("mgMuidn");
                    return typeof e == "string" && e.length > 0
                } else return !1
            }
            isTimeOverLimit(e) {
                return e > this.timeOutLimit * 6e4
            }
            isTimeMoreMinLimit(e) {
                return e > this.viewMinTime * 1e3
            }
            getCurrentPage() {
                return this.app.context[this.keyUserPages].filter(e => e.pathname === this.currentPath)[0]
            }
            getPvid() {
                return this.app.pvid || this.app.context._mgPvid || this.app.context.localStorage.getItem("_mgPvid") || ""
            }
            getMuidn() {
                return this.muidn || (this.muidn = this.app.context.localStorage.getItem("mgMuidn")), this.muidn
            }
        }
    });
    var ms = {};
    ft(ms, {
        RtbBlock: () => Be
    });
    var Be, xs = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Be = class extends $ {
            constructor(e) {
                super(e), this.name = "RtbBlock", this.addHook("afterLoadNewsHooks", this.cmPixelLoad)
            }
            cmPixelLoad() {
                if (!this.app.context["i.js.loaded"] && this.app.cookieMatchingDomain) {
                    this.app.context["i.js.loaded"] = !0;
                    let e = this.app.webProtocol + "//" + this.app.cookieMatchingDomain + "/i.js?",
                        i = typeof this.app.realRoot < "u" ? this.app.realRoot : this.app.root,
                        o = {};
                    this.app.muid && (o.muid = this.app.muid), e += Object.keys(o).map(c => c + "=" + encodeURIComponent(o[c])).join("&"), e += "&" + this.app.getCbusterParameter();
                    let p = {
                        charset: "utf-8",
                        onerror: () => {
                            this.app.context["i.js.loaded"] = !1
                        },
                        dest: i.parentNode
                    };
                    this.app.request.script("i.js", e, {}, p)
                }
                if (!this.app.context["i-noref.js.loaded"] && this.app.cookieMatchingDomain) {
                    this.app.context["i-noref.js.loaded"] = !0;
                    let e = this.app.context.document.createElement("IFRAME");
                    e.src = "about:blank", e.frameBorder = 0, e.style.position = "absolute", e.style.top = "0px", e.style.left = "-1px", e.style.width = "0px", e.style.height = "0px", e.style.display = "none", e.onload = () => {
                        setTimeout(() => {
                            let i = this.app.webProtocol + "//" + this.app.cookieMatchingDomain + "/i-noref.js?" + this.app.getCbusterParameter(),
                                o = {
                                    charset: "utf-8",
                                    onerror: () => {
                                        this.app.context["i-noref.js.loaded"] = !1
                                    },
                                    dest: e.contentDocument.body
                                };
                            this.app.request.script("i-noref", i, {}, o)
                        }, 0)
                    }, setTimeout(() => {
                        this.app.context.document.body.appendChild(e)
                    }, 0)
                }
            }
        }
    });
    var _t, Ge = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        _t = class extends $ {
            constructor(e) {
                super(e), this.addHook("afterInitHooks", this.init)
            }
            init() {
                if (!this.initCheck()) return;
                this.check() || this.addHook("afterLoadNewsHooks", this.load);
                let e = this.getData();
                e !== "" && (this.app.requestParams[this.paramName] = `${this.paramName}=` + encodeURIComponent(e))
            }
            initCheck() {
                return !0
            }
        }
    });
    var ws = {};
    ft(ws, {
        ID5Block: () => Ae
    });
    var Ae, bs = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        Ge();
        Ae = class extends _t {
            constructor(e) {
                super(e), this.storageKey = "_mgID5", this.name = "ID5Block", this.paramName = "id5", this.refreshTime = 36e5
            }
            id5Init() {
                let e = "https://cdn.id5-sync.com/api/1.0/id5-api.js",
                    i = this.app.context.document.createElement("script");
                i.async = !0, i.type = "text/javascript", i.src = e, this.app.root.parentNode.insertBefore(i, this.app.root);
                let o = 0,
                    p = setInterval(() => {
                        o++, o > 20 && clearInterval(p), typeof this.app.context.ID5 < "u" && this.app.context.ID5.loaded === !0 && (clearInterval(p), this.app.context.ID5.init(this.id5Params())?.onAvailable(this.id5Callback.bind(this)))
                    }, 100)
            }
            id5Params() {
                return {
                    partnerId: 231,
                    refreshInSeconds: 15
                }
            }
            id5Callback(e) {
                let i = e.getUserId();
                if (typeof i < "u" && i != 0)
                    if (this.app.context._mgID5Exists = !0, this.app.isAmp()) {
                        let o = this.storageKey + "=" + i + ";domain=.ampproject.net;Max-Age=" + this.refreshTime / 1e3 + ";SameSite=None;Secure";
                        this.app.context.document.cookie = o
                    } else this.app.context.localStorage.setItem(this.storageKey, JSON.stringify({
                        time: new Date().getTime(),
                        data: i
                    }))
            }
            check() {
                let e = !0;
                if (this.app.isAmp()) this.app.getCookieValue(this.storageKey).length || (e = !1);
                else {
                    let i = this.app.context.localStorage.getItem(this.storageKey);
                    if (i) {
                        let o = JSON.parse(i);
                        new Date().getTime() - o.time > this.refreshTime && (e = !1)
                    } else e = !1
                }
                return e
            }
            getData() {
                let e = "";
                if (this.app.isAmp()) e = this.app.getCookieValue(this.storageKey);
                else {
                    let i = this.app.context.localStorage.getItem(this.storageKey);
                    i && (e = JSON.parse(i).data)
                }
                return e
            }
            load() {
                typeof this.app.context._mgID5Exists > "u" && this.id5Init()
            }
            initCheck() {
                return this.app.currentSubnet === 0
            }
        }
    });
    var ks = {};
    ft(ks, {
        PubmaticBlock: () => Me
    });
    var Me, ys = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        Ge();
        Me = class extends _t {
            constructor(e) {
                super(e), this.storageKey = "_mgPubmatic", this.name = "PubmaticBlock", this.paramName = "pubmatic", this.refreshTime = 36e5
            }
            initPubmaticCode() {
                this.app.context.PWT = {}, this.app.context.pbjs = this.app.context.pbjs || {}, this.app.context.pbjs.que = this.app.context.pbjs.que || [], this.app.context.PWT.jsLoaded = () => {
                    this.app.context._mgPubmaticExists = !0, this.app.context.localStorage.setItem(this.storageKey, JSON.stringify({
                        time: new Date().getTime(),
                        data: JSON.stringify(this.app.context.PWT.getUserIds())
                    }))
                };
                let e = this.app.context.location.href,
                    i = "https://ads.pubmatic.com/AdServer/js/pwt/161673/7165",
                    o = "";
                if (e.indexOf("pwtv=") > 0) {
                    let w = /pwtv=(.*?)(&|$)/g.exec(e);
                    w.length >= 2 && w[1].length > 0 && (o = "/" + w[1])
                }
                let p = this.app.context.document.createElement("script");
                p.async = !0, p.type = "text/javascript", p.src = i + o + "/pwt.js", this.app.root.parentNode.insertBefore(p, this.app.root)
            }
            check() {
                let e = this.app.context.localStorage.getItem(this.storageKey);
                if (e) {
                    let i = JSON.parse(e);
                    if (new Date().getTime() - i.time > this.refreshTime) return !1
                } else return !1;
                return !0
            }
            getData() {
                let e = this.app.context.localStorage.getItem(this.storageKey);
                return e ? JSON.parse(e).data : ""
            }
            load() {
                typeof this.app.context._mgPubmaticExists > "u" && this.initPubmaticCode()
            }
        }
    });
    var Is = {};
    ft(Is, {
        ObserverBlock: () => Le
    });
    var Le, Ds = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        dt();
        Le = class extends $ {
            constructor(e) {
                super(e), this.name = "ObserverBlock", this.addHook("afterLoadNewsHooks", this.initWidgetObserver)
            }
            initWidgetObserver() {
                if (this.app.context.IntersectionObserver) {
                    this.app.widgetObserver = new IntersectionObserver(e => {
                        e.forEach(i => {
                            let o = i.isIntersecting ? "shown" : "hidden";
                            if (i.target == this.app.root) this.app.log(`Observer. Widget ${o}. Ratio: ${i.intersectionRatio}`), this.app.lifeCycleBlock.processHooks("observerWidgetHooks", [i.isIntersecting, i.intersectionRatio]);
                            else
                                for (let p = 0; p < this.app.observerTeasersHooks.length; p++) {
                                    let c = 1,
                                        w = 1;
                                    try {
                                        i.target instanceof HTMLElement && (c = this.app.teaserData[i.target.dataset.i].iteration, w = this.app.teaserData[i.target.dataset.i].page)
                                    } catch {}
                                    this.app.log(`Observer. Teaser[${w}, ${c}] ${o}. 
                Ratio: ${i.intersectionRatio}`), this.app.lifeCycleBlock.processHooks("observerTeasersHooks", [i.target, i.isIntersecting, i.intersectionRatio, c, w])
                                }
                        })
                    }, {
                        threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                    }), this.app.widgetObserver.observe(this.app.root);
                    for (let e of this.app.root.getElementsByClassName("mgline")) this.app.widgetObserver.observe(e)
                }
            }
        }
    });
    var Ts = Bt(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H()
    });
    var vs = Bt(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H()
    });
    var Nt, Es = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        Nt = class {
            constructor(e) {
                this.app = e, this.app.debugBlock.initDebugger(), this.app.lifeCycleBlock = this, this.stage = "", this.workInProgress = !1, this.isAdBlockDetect = !1, this.workersAvailable = typeof Worker < "u";
                try {
                    let i = new Worker(window.URL.createObjectURL(new Blob([], {
                        type: "text/javascript"
                    })))
                } catch {
                    this.workersAvailable = !1
                }
                if (this.workersAvailable) {
                    let i = new Blob([`self.onmessage = function(e) { 
              if (e.data.timeout === 0) { self.postMessage({ eventId: e.data.eventId }); }
              else { setTimeout(function() { self.postMessage({ eventId: e.data.eventId }); }, e.data.timeout); }
            }`], {
                        type: "text/javascript"
                    });
                    this.worker = new Worker(window.URL.createObjectURL(i)), this.workerCallbacks = {}, this.worker.addEventListener("message", o => {
                        this.workerCallbacks[o.data.eventId](), delete this.workerCallbacks[o.data.eventId]
                    })
                }
            }
            async run() {
                this.stage = "init", this.workInProgress = !0, this.app.time("run()");
                try {
                    this.app.time("initBlocks()"), await this.initBlocks(), this.app.timeEnd("initBlocks()"), this.app.utils.hasStorageConsents(), this.app.time("processHooks(beforeInitHooks)"), await this.processHooks("beforeInitHooks"), this.app.timeEnd("processHooks(beforeInitHooks)"), await this.execute("app.init()", () => {
                        this.app.init()
                    }), await this.execute("app.utils.isMobile()", () => {
                        this.app.utils.isMobile()
                    }), this.app.time("processHooks(afterInitHooks)"), await this.processHooks("afterInitHooks"), this.app.timeEnd("processHooks(afterInitHooks)"), this.app.time("app.videoMetricsBlock.waitForCollectMetrics()"), await this.app.videoMetricsBlock.waitForCollectMetrics(), this.app.timeEnd("app.videoMetricsBlock.waitForCollectMetrics()"); {
                        let e = await this.execute("app.preparePrerenderData()", () => this.app.preparePrerenderData()),
                            i = await this.execute("app.templateFunc()", () => this.app.templateFunc(e, !0));
                        await this.execute("app.prerenderNews()", () => {
                            this.app.prerenderNews(i)
                        }), await this.execute("app.calcPreRenderingBlock()", () => {
                            this.app.calcPreRenderingBlock()
                        }, 50)
                    }
                    this.app.time("processHooks(beforeInjectScriptHooks)"), await this.processHooks("beforeInjectScriptHooks"), this.app.timeEnd("processHooks(beforeInjectScriptHooks)"), await this.execute("app.injectScript()", () => {
                        this.app.injectScript()
                    }), this.app.initServicerRequest || (this.app.time("processHooks(afterInjectScriptHooks)"), await this.processHooks("afterInjectScriptHooks"), this.app.timeEnd("processHooks(afterInjectScriptHooks)"))
                } catch (e) {
                    this.app.log("", "error", e)
                }
                this.workInProgress = !1, this.app.timeEnd("run()")
            }
            async render(e, i) {
                await this.waitForFree(), this.stage = "render", this.workInProgress = !0, this.app.time("render()");
                try {
                    if (typeof this.app.headerBiddingBlock < "u") {
                        let o = await this.app.headerBiddingBlock.merge({
                            json: e,
                            servicerData: i
                        });
                        e = o.json, i = o.servicerData
                    }
                    await this.execute("loadNewsPrestart()", () => {
                        this.app.loadNewsPrestart(i)
                    }), this.app.time("processHooks(beforeLoadNewsHooks)"), await this.processHooks("beforeLoadNewsHooks", [e, i]), this.app.timeEnd("processHooks(beforeLoadNewsHooks)"), await this.execute("app.loadNews()", () => {
                        this.app.loadNews(e, i)
                    }), this.app.time("processHooks(afterLoadNewsHooks)"), await this.processHooks("afterLoadNewsHooks"), this.app.timeEnd("processHooks(afterLoadNewsHooks)")
                } catch (o) {
                    this.app.log("", "error", o)
                }
                this.workInProgress = !1, this.app.timeEnd("render()")
            }
            async initBlocks() {
                if (await this.execute("", async () => {
                        this.app.main = new(await Promise.resolve().then(() => (Oe(), Re))).MainBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.contextBlock = new(await Promise.resolve().then(() => (Ve(), ze))).ContextBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.request = new(await Promise.resolve().then(() => (Fe(), qe))).RequestBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.cookieBlock = new(await Promise.resolve().then(() => ($e(), je))).CookieBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.stylesheetsBlock = new(await Promise.resolve().then(() => (Xe(), Ue))).StylesheetsBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.sendDimensions = new(await Promise.resolve().then(() => (Je(), Ye))).SendDimensionsBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.versionControl = new(await Promise.resolve().then(() => (Ke(), Ze))).VersionControlBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.internalExchangeBlock = new(await Promise.resolve().then(() => (ti(), Qe))).InternalExchangeBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.InternalExchangeLogger = new(await Promise.resolve().then(() => (ii(), ei))).InternalExchangeLoggerBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.advertLinkBlock = new(await Promise.resolve().then(() => (ai(), si))).AdvertLinkBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.colorBlock = new(await Promise.resolve().then(() => (ni(), oi))).ColorBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.gradientBlock = new(await Promise.resolve().then(() => (pi(), ri))).GradientBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.iframeSizeChangerBlock = new(await Promise.resolve().then(() => (hi(), ci))).IframeSizeChangerBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.adChoiceBlock = new(await Promise.resolve().then(() => (di(), li))).AdChoiceBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.rejectBlock = new(await Promise.resolve().then(() => (ui(), fi))).RejectBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.teaserHoverBlock = new(await Promise.resolve().then(() => (mi(), gi))).TeaserHoverBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.consentsBlock = new(await Promise.resolve().then(() => (ki(), bi))).ConsentsBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.navigatorAgentDataBlock = new(await Promise.resolve().then(() => (Ii(), yi))).NavigatorAgentDataBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.refreshNewsBlock = new(await Promise.resolve().then(() => (Ti(), Di))).RefreshNewsBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.countersBlock = new(await Promise.resolve().then(() => (Ei(), vi))).CountersBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.blurBlock = new(await Promise.resolve().then(() => (Wi(), Ci))).BlurBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.subnetsBlock = new(await Promise.resolve().then(() => (Pi(), Si))).SubnetsBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.mgqBlock = new(await Promise.resolve().then(() => (Bi(), _i))).MgqBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.smartDoubleClickBlock = new(await Promise.resolve().then(() => (Mi(), Ai))).SmartDoubleClickBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.mobileDoubleClickBlock = new(await Promise.resolve().then(() => (Ni(), Li))).MobileDoubleClickBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.desktopDoubleClickBlock = new(await Promise.resolve().then(() => (Ri(), Hi))).DesktopDoubleClickBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.sspDoubleClickBlock = new(await Promise.resolve().then(() => (zi(), Oi))).SspDoubleClickBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.utils = new(await Promise.resolve().then(() => (qi(), Vi))).UtilsBlock(this.app)
                    }), await this.execute("", async () => {}), await this.execute("", async () => {
                        this.app.externalCountersBlock = new(await Promise.resolve().then(() => (ji(), Fi))).ExternalCountersBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.ampRenderBlock = new(await Promise.resolve().then(() => (Ui(), $i))).AmpRenderBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.videoMetricsBlock = new(await Promise.resolve().then(() => (Yi(), Xi))).VideoMetricsBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.originTrialsBlock = new(await Promise.resolve().then(() => (Zi(), Ji))).OriginTrialsBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.elasticBlock = new(await Promise.resolve().then(() => (Qi(), Ki))).ElasticBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.antifraudStatisticsBlock = new(await Promise.resolve().then(() => (is(), es))).AntifraudStatisticsBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.antifraudBlock = new(await Promise.resolve().then(() => (os(), as))).AntifraudBlock(this.app)
                    }), 5 > 0 && await this.execute("", async () => {
                        this.app.accidentalClicksBlock = new(await Promise.resolve().then(() => (rs(), ns))).AccidentalClicksBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.activateDelayBlock = new(await Promise.resolve().then(() => (cs(), ps))).ActivateDelayBlock(this.app)
                    }), await this.execute("", async () => {
                        this.app.monitorBlock = new(await Promise.resolve().then(() => (ls(), hs))).MonitorBlock(this.app)
                    }), this.isAdBlockDetect) {
                    for (let e in this.app.childWidgetsData)
                        if (this.app.childWidgetsData.hasOwnProperty(e)) {
                            let i = this.app.childWidgetsData[e].isAdblockChild,
                                o = this.app.childWidgetsData[e].childSubtype;
                            if (i && o === "in-article-adblock") {
                                await this.execute("", async () => {
                                    this.app.hideDescriptionBlock = new(await Promise.resolve().then(() => (fs(), ds))).HideDescriptionBlock(this.app)
                                });
                                break
                            }
                        }
                }
                await this.execute("", async () => {
                    this.app.collectViewDataBlock = new(await Promise.resolve().then(() => (gs(), us))).CollectViewDataBlock(this.app)
                }), await this.execute("", async () => {
                    this.app.rbtBlock = new(await Promise.resolve().then(() => (xs(), ms))).RtbBlock(this.app)
                });
                try {
                    this.app.context.localStorage && (await this.execute("ID5Block", async () => {
                        this.app.id5Block = new(await Promise.resolve().then(() => (bs(), ws))).ID5Block(this.app)
                    }), await this.execute("PubmaticBlock", async () => {
                        this.app.pubmaticBlock = new(await Promise.resolve().then(() => (ys(), ks))).PubmaticBlock(this.app)
                    }))
                } catch {}
                await this.execute("", async () => {
                    this.app.observerBlock = new(await Promise.resolve().then(() => (Ds(), Is))).ObserverBlock(this.app)
                });
                try {
                    await Promise.resolve().then(() => Gt(Ts())), await Promise.resolve().then(() => Gt(vs())), await this.initializeCustomFuncBlocks()
                } catch (e) {
                    this.app.log("LifeCycleBlock - Initialize Custom Func Blocks error:", "error", e)
                }
            }
            async initializeCustomFuncBlocks() {
                let e = window["MarketGidInfC1435486"].parentCustomFuncBlocks || {};
                for (let i in e)
                    if (e.hasOwnProperty(i)) {
                        let o = i.replace(/[-_]/g, "").replace(/./, c => c.toUpperCase()) + "Block",
                            p = `Custom func block - ${i}`;
                        await this.execute(p, c => {
                            try {
                                this.app[o] = new e[i](this.app), c()
                            } catch (w) {
                                this.app.log(`LifeCycleBlock - ${p} error:`, "error", w), c()
                            }
                        }, 0, !1, !0)
                    }
            }
            async processHooks(e, i) {
                for (let o = 0; o < this.app[e].length; o++) {
                    let p = this.app[e][o];
                    try {
                        await p(i)
                    } catch (c) {
                        this.app.log(`LifeCycleBlock - ${e} hook ${p} failed`, "error", c)
                    }
                }
            }
            async execute(e, i, o = 0, p = !1, c = !1) {
                e && typeof this.app.time == "function" && this.app.time(e);
                let w = navigator.userAgent.toLowerCase(),
                    k = this.app.isAmp() || !(w.indexOf("chrome") > -1 && navigator.vendor.toLowerCase().indexOf("google") > -1) || w.indexOf("fbav") > -1 || w.indexOf("fban") > -1;
                return new Promise(h => {
                    if (k && !p) c ? i(h) : h(i());
                    else if (this.workersAvailable) {
                        let y = ("0000000000" + Math.round(Math.random() * 1e10).toString(16)).slice(-10);
                        this.workerCallbacks[y] = () => {
                            c ? i(h) : h(i())
                        }, this.worker.postMessage({
                            eventId: y,
                            timeout: o
                        })
                    } else setTimeout(() => {
                        c ? i(h) : h(i())
                    }, o)
                }).finally(() => {
                    e && typeof this.app.timeEnd == "function" && this.app.timeEnd(e)
                })
            }
            async waitForFree() {
                return new Promise(e => {
                    (function i() {
                        this.workInProgress ? this.execute("", () => {
                            i.bind(this)()
                        }, 50, !0) : e()
                    }).bind(this)()
                })
            }
        }
    });
    var Ht, Cs = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        He();
        Es();
        Ht = class {
            canLoad() {
                let e = this._getVersion();
                return e != null ? (this._loadVersion(e), !0) : !1
            }
            _getVersion() {
                let e = this._getMgID(),
                    i = this._getCodes();
                if (e != null) {
                    if (parent.window.document.getElementById(i[9])) return 9;
                    if (parent.window.document.getElementById(i[10])) return 10
                } else if ([this._getCodes(1435486)[9], this._getCodes(1435486)[9], this._getCodes(1435486)[10], this._getCodes(1435486)[10]].filter(p => document.getElementById(p))[0]) return 11;
                if (document.getElementById(i[3])) return 3;
                if (document.getElementById(i[4])) return 4
            }
            _loadVersion(e) {
                +e <= 4 ? this._loadVersion3To4(e) : +e <= 10 ? this._loadVersion9To10(e) : +e == 11 && this._loadVersion11WithWidgetID()
            }
            _loadVersion11WithWidgetID() {
                let e = this._getUniqID(),
                    i = e !== "" ? "_" + e : "",
                    o = null;
                if ([
                        [this._getCode(10, 1435486), 1435486],
                        [this._getCode(10, 1435486), 1435486],
                        [this._getCode(9, 1435486), 1435486],
                        [this._getCode(9, 1435486), 1435486]
                    ].some(([c, w]) => {
                        if (document.getElementById(c)) return o = w, !0
                    }), !window.document.getElementById(this._getCode(3, o)) || !window.document.getElementById(this._getCode(4, o))) {
                    let c = [this._getCode(9, o), this._getCode(10, o)].filter(k => window.document.getElementById(k))[0],
                        w = this._getCode(3, o + i) + i;
                    this._setDivs({
                        id: w,
                        rootID: c,
                        newRootID: c + i
                    })
                }
                this._setPreloadBlockId(o, i);
                let p = [this._getCode(3, o + i) + i, this._getCode(4, o + i) + i].filter(c => document.getElementById(c))[0];
                this._loadApp({
                    id: p,
                    containerID: o + i,
                    version: 11
                })
            }
            _loadVersion3To4(e) {
                let o = this._getCode(e);
                document.getElementById(o).innerHTML = "", this._loadApp({
                    id: o,
                    version: e,
                    fallback: !1,
                    containerID: 0
                })
            }
            _loadVersion9To10(e) {
                let i = "_" + this._getUniqID(),
                    o = this._getCode(e),
                    p = "MarketGidComposite" + 1435486 + i,
                    c = parent.window;
                this._setPreloadBlockId(this._getMgID(), i), this._setDivs({
                    id: p,
                    rootID: o,
                    context: c,
                    newRootID: o + i
                }), this._loadApp({
                    id: p,
                    version: e,
                    context: c,
                    containerID: this._getMgID() + i
                })
            }
            _loadApp({
                id: e,
                context: i = window,
                fallback: o = !1,
                containerID: p = this._getMgID(),
                uniqID: c = this._getUniqID(),
                version: w
            }) {
                this.widget = new Wt(e, i, o, p, c, w), this.lifeCycle = new Nt(this.widget), window["MarketGidInfC1435486"] = this.widget
            }
            _setDivs({
                rootID: e,
                id: i,
                context: o = window,
                newRootID: p = null
            }) {
                let c = o.document.getElementById(e),
                    w = o.document.createElement("div");
                w.id = i, c.appendChild(w), p && (c.id = p)
            }
            _setPreloadBlockId(e, i) {
                let o = "MarketGidPreloadC" + e,
                    p = "M" + 872416 + "PreloadC" + e,
                    c = [o, p].filter(w => {
                        try {
                            return parent.window.document.getElementById(w)
                        } catch {
                            return window.document.getElementById(w)
                        }
                    })[0];
                if (c) try {
                    parent.window.document.getElementById(c).id = c + i
                } catch {
                    window.document.getElementById(c).id = c + i
                }
            }
            _getUniqID() {
                return this.uniqID || (this.uniqID = window.uniqId || ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5)), this.uniqID
            }
            _getCodes(e = null) {
                let i = e || this._getMgID();
                return {
                    3: "MarketGidComposite" + 1435486,
                    4: "M" + 872416 + "Composite" + 1435486,
                    9: "MarketGidScriptRootC" + i,
                    10: "M" + 872416 + "ScriptRootC" + i
                }
            }
            _getCode(e, i = null) {
                return this._getCodes(i)[e]
            }
            _getMgID() {
                return typeof this.mgID > "u" && (document.getElementById("MG_ID") ? this.mgID = document.getElementById("MG_ID").innerHTML : this.mgID = null), this.mgID
            }
        }
    });
    var js = {};
    var Ws, Fs, Ss = it(() => {
        P();
        _();
        B();
        G();
        A();
        L();
        H();
        Cs();
        Ws = new Ht, Fs = () => {
            let D = !0,
                e = `mg_loaded_${872416}_${1435486}`;
            typeof window[e] < "u", D && (window[e] = !0, window[e] = !0, Ws.lifeCycle.run())
        };
        Ws.canLoad() && Fs()
    });
    P();
    _();
    B();
    G();
    A();
    L();
    H();
    Promise.resolve().then(() => Ss());
})();
