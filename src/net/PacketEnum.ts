
class PacketEnum {

	static readonly C2S_Ping: number = 0x0002;
	static readonly SC_PlayerChatRespone: number = 0x0003;//各种提示

	static readonly CS_Charge: number = 0x0C00; //             充值
	static readonly SC_ChargeRet: number = 0x0C01;

	static readonly CS_LoginPacket: number = 0x010C; //              CS_LoginPacket
	static readonly SC_LoginResultPacket: number = 0x0102;
	static readonly SC_RegResult: number = 0x0104;//注册结果
	static readonly CS_RandomName: number = 0x20a;
	static readonly SC_RandomName: number = 0x20b;
	static readonly SC_LoginReply: number = 0x110;
	static readonly CS_LoginGame: number = 0x201;
	static readonly SC_LoginGame: number = 0x202;
	static readonly SC_recvHaveRole: number = 0x204;//没有角色
	static readonly CS_LoginCreateRole: number = 0x205;//创建角色
	static readonly SC_LoginCreateRole: number = 0x206;

	static readonly S2C_InitData: number = 0x300;
	static readonly S2C_EnterMain: number = 0x301;
	static readonly SC_ForbidLogin: number = 0x302;//禁止角色登陆时，角色登陆时返回数据		
	static readonly SC_OtherClientLogin: number = 0x303;//其他帐号登录了
	static readonly CS_GetSortData: number = 0x308;//获取排行榜数据
	static readonly SC_GetSortData: number = 0x309;//获取排行榜数据
	static readonly CS_GetEmailList: number = 0x310;//请求邮件列表
	static readonly SC_SendEmailList: number = 0x311;//给客户端发送邮件列表
	static readonly SC_ReceiveEmail: number = 0x314;//收到一封邮件;玩家在线时更新红点
	static readonly CS_GetEmailAttachment: number = 0x315;//收取邮件附件
	static readonly SC_GetEmailAttachmentRet: number = 0x316;//收取邮件附件返回
	static readonly CS_ReadEmail: number = 0x317;//设置已读标记

	static readonly CS_GetServerTime: number = 0x320;//获取服务器时间
	static readonly SC_GetServerTime: number = 0x321;
	static readonly SC_OfflineIncome: number = 0x322;//通知客户端离线收益信息
	static readonly SC_GuideList: number = 0x330;//同步已完成的新手引导列表
	static readonly CS_GuideComplete: number = 0x331;//完成一步新手引导
	static readonly SC_GuideCompleteRet: number = 0x332;
	static readonly CS_GetPlayerPartnerAppearances: number = 0x318;//获取玩家形象
	static readonly SC_GetPlayerPartnerAppearances: number = 0x319;//获取玩家形象返回

	static readonly CS_ChangeName: number = 0x323;//-- 玩家改名
	static readonly SC_ChangeName: number = 0x324;//获取玩家形象返回
	static readonly CS_ChangeHeadIcon: number = 0x325;//-- 玩家头像
	static readonly SC_ChangeHeadIcon: number = 0x326;//获取头像返回


	static readonly SC_VipLevelAns: number = 0x340;//vip信息
	static readonly CS_GetVipGift: number = 0x341;//领取vip礼包
	static readonly SC_GetVipGift: number = 0x342;
	static readonly SC_YuekaSync: number = 0x343;
	static readonly SC_UpdateYueka: number = 0x345;
	static readonly SC_GoldBoxSync: number = 0x346;//金币宝箱
	static readonly CS_OpenGoldBox: number = 0x347;
	static readonly SC_OpenGoldBox: number = 0x348;

	static readonly SC_SyncPartners: number = 0x400;//同步伙伴信息
	static readonly CS_UpgradeSkill: number = 0x401;//升级、进阶伙伴技能
	static readonly SC_UpgradeSkillRet: number = 0x402;//升级、进阶伙伴技能结果
	static readonly CS_AddPartner: number = 0x403;//新增伙伴
	static readonly SC_AddPartnerRet: number = 0x404;//新增伙伴返回

	static readonly CS_ZhuanSheng: number = 0x405;//转生
	static readonly SC_ZhuanShengRet: number = 0x406;

	static readonly CS_GetPlayerAttrs: number = 0x410;//获取玩家属性
	static readonly SC_GetPlayerAttrs: number = 0x411;//获取玩家属性返回

	static readonly SC_PlayerDataUpdate: number = 0x500;//玩家数据更新
	static readonly SC_PlayerComDataSync: number = 0x501;//玩家数据同步

	static readonly SC_NormalBattleData: number = 0x600;//普通战斗的信息
	static readonly CS_NormalBattleVerify: number = 0x601;//普通战斗验证
	static readonly SC_NormalBattleRet: number = 0x602;//普通战斗验证返回
	static readonly CS_NormalBossVerify: number = 0x603;//普通BOSS战斗验证
	static readonly SC_NormalBossRet: number = 0x604;//普通BOSS战斗返回
	static readonly CS_NormalBossEnd: number = 0x605;//普通BOSS战斗结算
	static readonly SC_NormalBossEnd: number = 0x606;//普通BOSS战斗结算返回

	static readonly SC_DupData: number = 0x610;//副本数据
	static readonly CS_NormalDupEnter: number = 0x611;//进入普通副本
	static readonly SC_NormalDupEnterRet: number = 0x612;//进入普通副本返回
	static readonly CS_WorldBossDupEnter: number = 0x613;//进入世界BOSS副本
	static readonly SC_WorldBossDupEnterRet: number = 0x614;//进入世界BOSS副本返回
	static readonly SC_WorldBossKilled: number = 0x615;//世界BOSS击杀通知
	static readonly CS_GetWorldBossKillers: number = 0x616;//获取当天世界BOSS击杀数据
	static readonly SC_GetWorldBossKillersRet: number = 0x617;//获取当天世界  BOSS击杀数据返回
	static readonly CS_WorldBossBuyTimes: number = 0x618;//购买世界BOSS次数
	static readonly SC_WorldBossBuyTimesRet: number = 0x619;//购买世界BOSS次数返回
	static readonly CS_WorldBossClearCD: number = 0x620;//清除世界BOSS战斗CD
	static readonly SC_WorldBossClearCDRet: number = 0x621;//清除世界BOSS战斗CD返回
	static readonly SC_WorldBossData: number = 0x622;//同步世界BOSS数据
	static readonly CS_WorldBossGetList: number = 0x623;//获取世界BOSS列表
	static readonly SC_WorldBossGetListRet: number = 0x624;

	static readonly SC_TaskInfoData: number = 0x800;//任务信息
	static readonly CS_CompleteTaskData: number = 0x801;//完成任务
	static readonly SC_TaskComplete: number = 0x802;//返回任务完成结果
	//聊天消息
	static readonly CS_ChatRequest: number = 0x810; //2S_ChatRquest
	static readonly SC_ChatRespone: number = 0x812; //C2S_ChatRespone
	static readonly CS_ChatGetCache: number = 0x813;//获取缓存的聊天信息
	static readonly SC_ChatGetCacheRet: number = 0x814;

	static readonly SC_DailyTaskSync: number = 0x820; //同步每日任务
	static readonly SC_DailyTaskDataChg: number = 0x821; //每日任务数据变化
	static readonly CS_GetDailyTaskAward: number = 0x822; //领取每日任务奖励
	static readonly SC_GetDailyTaskAwardRet: number = 0x823; //领取每日任务奖励返回
	static readonly CS_GetLivenessAward: number = 0x824; //领取活跃度奖励
	static readonly SC_GetLivenessAwardRet: number = 0x825; //领取活跃度奖励返回

	static readonly SC_AchievementSync: number = 0x830; //同步成就数据
	static readonly SC_AchDataChg: number = 0x831; //同步成就数据变化
	static readonly CS_AchGetAward: number = 0x832; //领取成就奖励
	static readonly SC_AchGetAwardRet: number = 0x833; //领取成就奖励返回
	static readonly SC_SyncCustomsData: number = 0x840; //同步关卡信息

	static readonly SC_InventorySync: number = 0x700;//同步背包
	static readonly SC_PartnerEquipSync: number = 0x701;//同步装备
	static readonly CS_WearEquip: number = 0x702;//穿装备
	static readonly SC_WearEquip: number = 0x703;//穿装备返回
	static readonly CS_UseItem: number = 0x704;//物品使用
	static readonly SC_UseItem: number = 0x705;
	static readonly CS_SellItem: number = 0x706;//物品出售
	static readonly SC_SellItem: number = 0x707;
	static readonly SC_PartnerEquipPosSync: number = 0x708;//同步装备位信息
	static readonly CS_Enhance: number = 0x709;//强化
	static readonly SC_Enhance: number = 0x70A;
	static readonly CS_Append: number = 0x70B;//升星
	static readonly SC_Append: number = 0x70C;
	static readonly CS_UpGem: number = 0x70D;//宝石
	static readonly SC_UpGem: number = 0x70F;
	//		static readonly CS_WearEquipOneKey:number		   = 0x70d;// 一键穿装备
	//		static readonly SC_WearEquipOneKey:number		   = 0x70e;
	static readonly CS_InventoryExpand: number = 0x710;//背包扩容
	static readonly SC_InventoryExpand: number = 0x711;
	static readonly CS_UpdateItemLock: number = 0x712;//物品锁
	static readonly SC_UpdateItemLock: number = 0x713;
	static readonly CS_EquipRecycle: number = 0x714;//熔炼
	static readonly SC_EquipRecycle: number = 0x715;

	static readonly CS_RequstMallGoods: number = 0x720;//请求商城物品列表
	static readonly SC_MallGoodsSync: number = 0x721;//商城物品同步
	static readonly CS_RefreshMallGoods: number = 0x722;//商城刷新
	static readonly SC_RefreshMallGoods: number = 0x723;//商城刷新返回
	static readonly CS_BuyGoods: number = 0x724;//买东西
	static readonly SC_BuyGoods: number = 0x725;//买东西返回

	//翅膀
	static readonly SC_WingInfo: number = 0x790;//翅膀信息
	static readonly CS_WingDevelop: number = 0x791;//翅膀培养
	static readonly SC_WingDevelop: number = 0x792;
	static readonly CS_WingActivate: number = 0x793;//激活翅膀
	static readonly SC_WingActivate: number = 0x794;
	static readonly SC_WingDevelopInfo: number = 0x795;//翅膀培养信息
	static readonly SC_WingStarInfo: number = 0x796;//翅膀升星信息		

	//帮会管理消息
	static readonly CS_FactionGetList: number = 0x0900;			//公会列表
	static readonly SC_FactionGetListRet: number = 0x0901;
	static readonly CS_FactionCreate: number = 0x0902;			//创建公会
	static readonly SC_FactionCreateRet: number = 0x0903;
	static readonly CS_FactionAdd: number = 0x0904;				//申请加入公会
	static readonly SC_FactionAddRet: number = 0x0905;
	static readonly CS_FactionDelete: number = 0x0906;			//解散公会
	static readonly SC_FactionDeleteRet: number = 0x0907;
	static readonly CS_FactionUnAdd: number = 0x0908;			//取消公会申请
	static readonly SC_FactionUnAddRet: number = 0x0909;
	static readonly CS_FactionSearchOne: number = 0x090a;		//查找公会
	static readonly SC_FactionSearchOneRet: number = 0x090b;
	static readonly CS_FactionGetRank: number = 0x090c;			//获取公会排行榜
	static readonly SC_FactionGetRankRet: number = 0x090d;
	static readonly CS_FactionGetLog: number = 0x90e;			//获取公会日志
	static readonly SC_FactionGetLogRet: number = 0x90f;

	static readonly CS_FactionGetMemberList: number = 0x0910;		//获取公会成员
	static readonly SC_FactionGetMemberListRet: number = 0x0911;
	static readonly CS_FactionOperateMem: number = 0x0912;			//公会成员操作
	static readonly SC_FactionOperateMemRet: number = 0x0913;
	static readonly CS_FactionProclamation: number = 0x0914;		//修改公会公告
	static readonly SC_FactionProclamationRet: number = 0x0915;
	static readonly CS_FactionSetAutoAllow: number = 0x0916;		//设置自动通过公会申请
	static readonly SC_FactionSetAutoAllow: number = 0x0917;
	static readonly CS_FactionLevelUp: number = 0x918;			//公会升级
	static readonly SC_FactionLevelUpRet: number = 0x919;			//公会升级返回
	static readonly CS_FactionSkillLevelUp: number = 0x91a;			//提升公会技能等级上限
	static readonly SC_FactionSkillLevelUpRet: number = 0x91b;		//提升公会技能等级上限返回
	static readonly CS_FactionBaseInfo: number = 0x0921;			//请求公会基本信息
	static readonly SC_FactionBaseInfo: number = 0x0922;
	static readonly CS_FactionIconChange: number = 0x0923;			//公会图标修改
	static readonly SC_FactionIconChangeRet: number = 0x0924;
	static readonly CS_FactionTanhe: number = 0x0925;				//弹劾会长
	static readonly SC_FactionTanheRet: number = 0x0926;
	static readonly SC_FactionTanheOk: number = 0x0927;
	static readonly SC_FactionBaseInfoSync: number = 0x0928;		//公会信息同步
	static readonly SC_FactionMemPosSync: number = 0x0929;			//公会成员权限同步		
	static readonly SC_FactionMemGXSync: number = 0x092A;			//公会成员贡献同步

	static readonly SC_FactionPlayerDataSync: number = 0x0930;		//玩家公会数据同步
	static readonly CS_FactionUpgradeSkill: number = 0x0931;		//升级公会技能
	static readonly SC_FactionUpgradeSkillRet: number = 0x0932;
	static readonly CS_FactionDonate: number = 0x0933;				//公会捐献
	static readonly SC_FactionTaskChg: number = 0x0934;			//公会任务计数变化

	static readonly SC_FactionInstanceSync: number = 0x0940;//玩家公会副本信息
	static readonly CS_GetFactionInstanceSort: number = 0x0941;//获取公户副本排名
	static readonly SC_GetFactionInstanceSort: number = 0x0942;
	static readonly CS_ChallengeFactionInstanceBegin: number = 0x9043;//挑战公会副本开始
	static readonly SC_ChallengeFactionInstanceBegin: number = 0x9044;
	static readonly CS_ChallengeFactionInstanceResult: number = 0x9045;//挑战结果
	static readonly SC_ChallengeFactionInstanceResult: number = 0x9046;
	static readonly CS_FactionInstanceSaodang: number = 0x9047;//公会副本扫荡
	static readonly SC_FactionInstanceSaodang: number = 0x9048;
	static readonly CS_FactionInstanceGetReward: number = 0x9049;//公会副本领奖
	static readonly SC_FactionInstanceGetReward: number = 0x904A;

	static readonly CS_RefreshArenaPlayerList: number = 0x0A00;//请求刷新战斗玩家列表
	static readonly CS_ArenaPlayerList: number = 0x0A01;//请求获取战斗玩家列表
	static readonly SC_ArenaPlayerList: number = 0x0A02;//战斗玩家列表
	static readonly CS_ArenaRank: number = 0x0A03;//请求玩家排名
	static readonly SC_ArenaRank: number = 0x0A04;//玩家排名
	static readonly CS_ArenaEnterBattle: number = 0x0A05;//请求进入战斗
	static readonly SC_ArenaEnterBattle: number = 0x0A06;//战斗结果
	static readonly CS_ArenaHighestRank: number = 0x0A07;//请求最高排行
	static readonly SC_ArenaHighestRank: number = 0x0A08;//最高排行
	static readonly CS_ArenaBattleCountBuy: number = 0x0A09;//请求挑战次数购买
	static readonly SC_ArenaBattleCountBuy: number = 0x0A0A;//挑战次数购买
	static readonly CS_ArenaRecord: number = 0x0A0B;//请求对战记录
	static readonly SC_ArenaRecord: number = 0x0A0C;//对战记录
	static readonly CS_ArenaTotalRank: number = 0x0A0D;//请求总排行
	static readonly SC_ArenaTotalRank: number = 0x0A0E;//总排行		
	static readonly CS_ArenaDetail: number = 0x0A10;//竞技场信息(进入竞技场)
	static readonly SC_ArenaDetail: number = 0x0A11;//竞技场信息(进入竞技场)
	static readonly CS_ArenaClearBattleCD: number = 0x0A12;//请求清除战斗CD
	static readonly SC_ArenaClearBattleCD: number = 0x0A13;//返回清除战斗CD

	static readonly CS_FortressInfo: number = 0x0A20;				//请求要塞信息
	static readonly SC_FortressInfo: number = 0x0A21;				//要塞信息返回
	static readonly CS_FortressEnterBattle: number = 0x0A22;		//请求进入战斗
	static readonly SC_FortressEnterBattle: number = 0x0A23;		//进入战斗
	static readonly SC_FortressUpdateInfo: number = 0x0A24;			//要塞信息跟新
	static readonly CS_GetTartgetReward: number = 0x0A25;			//领取目标奖励
	static readonly SC_GetTargetReward: number = 0x0A26;			//领取奖励返回
	static readonly CS_GetFortressRank: number = 0x0A27;			//获取排行榜
	static readonly SC_GetFortressRank: number = 0x0A28;			//排行榜信息 
	static readonly CS_RevivePartner: number = 0x0A29; 				//复活角色
	static readonly SC_RevivePartner: number = 0x0A2A; 				//复活角色返回		
	static readonly CS_FortressBattleResult: number = 0x0A2B; 		//战斗结果
	static readonly SC_FortressBattleResult: number = 0x0A2C; 		//战斗结果服务器返回	
	static readonly CS_FortressTargetDetailInfo: number = 0x0A2F; 	//查看目标详细信息

	static readonly CS_MercenarySummary: number = 0x0A30//佣兵概要
	static readonly SC_MercenarySummary: number = 0x0A31//返回佣兵概要
	static readonly CS_ActivateMercenary: number = 0x0A32//激活佣兵
	static readonly SC_ActivateMercenary: number = 0x0A33//返回激活佣兵
	static readonly CS_GetMercenaryInfo: number = 0x0A34//获取佣兵信息
	static readonly SC_GetMercenaryInfo: number = 0x0A35//返回佣兵信息
	static readonly CS_GetMercenaryList: number = 0x0A36//获取已有佣兵列表
	static readonly SC_GetMercenaryList: number = 0x0A37//返回已有佣兵列表
	static readonly CS_MercenaryUpgradeLevel: number = 0x0A38//佣兵升级
	static readonly SC_MercenaryUpgradeLevel: number = 0x0A39//返回佣兵升级
	static readonly CS_MercenaryUpgradeStar: number = 0x0A3A//佣兵升星
	static readonly SC_MercenaryUpgradeStar: number = 0x0A3B//返回佣兵升星
	static readonly CS_MercenaryRefining: number = 0x0A3C//洗练
	static readonly SC_MercenaryRefining: number = 0x0A3D//返回洗练
	static readonly CS_MercenaryRebirth: number = 0x0A3E//重生
	static readonly SC_MercenaryRebirth: number = 0x0A3F//返回重生


	static readonly CS_GetMagicallyInfo: number = 0x0A40;//获取幻化信息
	static readonly SC_GetMagicallyInfo: number = 0x0A41;//返回幻化信息
	static readonly CS_ActivateMagically: number = 0x0A42;//激活幻化
	static readonly SC_ActivateMagically: number = 0x0A43;//返回激活幻化
	static readonly CS_MagicallyUpgradeLevel: number = 0x0A44;//升级幻化
	static readonly SC_MagicallyUpgradeLevel: number = 0x0A45;//返回升级幻化
	static readonly SC_MagicallyDressSync: number = 0x0A46;//同步幻化套装穿戴信息
	static readonly CS_DressMagically: number = 0x0A47;//幻化套装穿戴

	static readonly SC_ElementSync: number = 0x0A50;//同步元素信息
	static readonly CS_ElementUpLevel: number = 0x0A51;//元素升级
	static readonly SC_ElementUpLevelRet: number = 0x0A52;//
	static readonly CS_ElementUpStep: number = 0x0A53;//元素升阶
	static readonly SC_ElementUpStepRet: number = 0x0A54;//
	static readonly CS_ElementAutoUpLevel: number = 0x0A55;//一键升级

	static readonly SC_StarsInfo: number = 0x0A60;//星图基本信息
	static readonly CS_ActiveStarMap: number = 0x0A61;//激活下一星
	static readonly SC_ActiveStarMap: number = 0x0A62;

	//符文
	static readonly CS_GetPlayerRuneInfo: number = 0x0A65;// 获取符文系统信息
	static readonly SC_GetPlayerRuneInfo: number = 0x0A66;
	static readonly CS_ReplaceRune: number = 0x0A67; // 替换符文
	static readonly SC_ReplaceRune: number = 0x0A68;
	static readonly CS_UpRunePos: number = 0x0A69; // 符文位升级
	static readonly SC_UpRunePos: number = 0x0A6A;
	static readonly SC_UpdatePartnerRune: number = 0x0A6B; // 符文更新
	static readonly CS_BreakRune: number = 0x0A6C; // 分解符文
	static readonly SC_BreakRune: number = 0x0A6D;
	static readonly SC_AddRuneToBag: number = 0x0A6E; // 符文背包新增符文
	static readonly SC_DeleteRuneFromBag: number = 0x0A6F; // 符文背包删除符文
	static readonly CS_BuyRune: number = 0x0A70; // 兑换符文
	static readonly SC_BuyRune: number = 0x0A71;
	static readonly CS_RandomRune: number = 0x0A72; // 符文探索
	static readonly SC_RandomRune: number = 0x0A73;
	static readonly CS_ExtractRune: number = 0x0A74; // 符文提取
	static readonly SC_DeleteRuneFromStorage: number = 0x0A75; // 符文仓库删除符文
	static readonly CS_LookOverNewRune: number = 0x0A76; // 查看新符文
	static readonly SC_UpdateLeftFreeTimes: number = 0x0A77; // 跨天更新免费次数

	static readonly SC_GWeaponsDressSync: number = 0x0A80;//同步神器穿戴信息
	static readonly CS_DressGWeapons: number = 0x0A81;//神器穿戴
	static readonly CS_GetGWeaponsInfo: number = 0x0A82;//获取神器列表
	static readonly SC_GetGWeaponsInfo: number = 0x0A83;//返回神器列表
	static readonly CS_ActivateGWeapons: number = 0x0A84;//激活神器
	static readonly SC_ActivateGWeapons: number = 0x0A85;//返回激活神器

	static readonly SC_TitleDressSync: number = 0x0A90;//同步称号佩戴信息
	static readonly CS_DressTitle: number = 0x0A91;//佩戴称号
	static readonly SC_TitleListSync: number = 0x0A92;//同步称号列表信息
	static readonly CS_GetTitleList: number = 0x0A93;//获取称号列表信息
	static readonly CS_TitleUpLevel: number = 0x0A94;//称号升级
	static readonly SC_TitleUpLevel: number = 0x0A95;//返回称号升级结果
	static readonly SC_TitleItemInfoSync: number = 0x0A96;// 同步称号道具信息
	static readonly CS_GetTitleItemList: number = 0x0A97;// 获取称号道具信息

	//七日登录
	static readonly SC_GetSevenDayAwardList: number = 0x0AA2;// 返回7日奖励列表
	static readonly CS_GetSevenDayAwardItem: number = 0x0AA3;// 获取奖励项目
	static readonly SC_GetSevenDayAwardItem: number = 0x0AA4;// 返回奖励项目


	// 魔晶
	static readonly SC_MoJingDataSync: number = 0x0AB0; // 同步魔晶数据
	static readonly CS_MoJingPeiYang: number = 0x0AB1; // 魔晶培养
	static readonly SC_MoJingPeiYang: number = 0x0AB2; // 

	// 签到
	static readonly CS_Attendance: number = 0xB40; // 签到
	static readonly SC_Attendance: number = 0xB41; // 签到
	static readonly CS_GetAttendanceList: number = 0xB42; // 获取签到列表
	static readonly SC_GetAttendanceList: number = 0xB43; // 返回签到列表

	//兑换码
	static readonly CS_LiPinMaGetEnc: number = 0x31A;

	//次日奖励
	static readonly SC_FundDataSync: number = 0xB80; //同步次日登陆奖励、成长基金数据
	static readonly CS_GetSecondDayAward: number = 0xB81;	//领取次日登陆奖励
	static readonly SC_GetSecondDayAward: number = 0xB82;

	//成长基金
	static readonly CS_GetFundAward: number = 0xB83;// 获取成长基金奖励
	static readonly SC_GetFundAward: number = 0xB84;
	static readonly CS_BuyFund: number = 0xB85;	// 购买成长基金
	static readonly SC_BuyFund: number = 0xB86;

	static readonly SC_ActivityHall: number = 0x0B50; // 活动大厅
	static readonly SC_ActivityOpen: number = 0x0B51;
	static readonly SC_ActivityClose: number = 0x0B52;
	static readonly SC_GotLevels: number = 0x0B53; // 已领取过的冲级活动奖励
	static readonly CS_ActivityLevelReward: number = 0x0B54; // 领取活动奖励
	static readonly SC_ActivityLevelReward: number = 0x0B55;
	static readonly SC_GotChargeTargets: number = 0x0B56;
	static readonly CS_ActivityChargeTargetReward: number = 0x0B57; // 领取累积充值奖励
	static readonly SC_ActivityChargeTargetReward: number = 0x0B58;
	static readonly SC_ActivityChargeContinueInfo: number = 0x0B59;
	static readonly CS_ChargeContinuTargetReward: number = 0x0B5A; // 领取连续充值奖励
	static readonly SC_ChargeContinuTargetReward: number = 0x0B5B;
	static readonly CS_ChargeContinuTodayTargetReward: number = 0x0B5C; // 领取当日充值目标奖励
	static readonly SC_UpdateChargeContinu: number = 0x0B5D;
	static readonly CS_GetActivityList: number = 0x0B61; // 获取活动列表
	static readonly SC_GetActivityList: number = 0x0B62; // 获取活动列表

	static readonly CS_GetMZRQData: number = 0x0B10;//获取魔族入侵数据
	static readonly SC_GetMZRQDataRet: number = 0x0B11;//
	static readonly CS_MZRQFightBegin: number = 0x0B12;//开始魔族入侵战斗
	static readonly SC_MZRQFightBeginRet: number = 0x0B13;//
	static readonly CS_MZRQRoundEnd: number = 0x0B14;//打完一波验证
	static readonly SC_MZRQRoundEndRet: number = 0x0B15;//
	static readonly CS_MZRQClearCD: number = 0X0B16;//清除魔族入侵战斗CD
	static readonly SC_MZRQClearCDRet: number = 0X0B17;//
	static readonly SC_MZRQFinished: number = 0x0B18;//活动结束
	static readonly CS_MZRQGetSortList: number = 0x0B19;//魔族入侵积分排行
	static readonly SC_MZRQGetSortListRet: number = 0x0B20;

	//占卜
	static readonly SC_DivinationHistory: number = 0xB30; //本服占卜历史
	static readonly SC_DivinationInfo: number = 0xB31; //基础信息
	static readonly SC_DivinationStorage: number = 0xB32; // 占卜仓库
	static readonly CS_Divination: number = 0xB33; // 占卜
	static readonly SC_DivinationResult: number = 0xB34; // 占卜结果
	static readonly CS_ExtractResult: number = 0xB35; // 提取
	static readonly SC_DeleteFromStorage: number = 0xB36; // 占卜仓库删除

	//限购礼包、特惠礼包
	static readonly CS_GetActGoods: number = 0x0B90; // 获取特惠礼包信息
	static readonly SC_GetActGoods: number = 0x0B91; //
	static readonly CS_BuyActGoods: number = 0x0B92; // 购买特惠礼包
	static readonly SC_BuyActGoods: number = 0x0B93; //

	static readonly CS_MercenaryToFight: number = 0x0C10;//请求佣兵出战
	static readonly CS_GetMercenaryFighting: number = 0x0C11;//获取出战佣兵
	static readonly SC_SyncMercenaryFighting: number = 0x0C12;//同步出战佣兵

	static readonly CS_GetEliteBossList: number = 0x0C30;//获取精英Boss列表
	static readonly SC_GetEliteBossList: number = 0x0C31;//返回精英Boss列表
	static readonly CS_ChallengeEliteBoss: number = 0x0C32;//挑战精英Boss
	static readonly SC_ChallengeEliteBoss: number = 0x0C33;//挑战精英Boss
	static readonly SC_SyncEliteBossInfo: number = 0x0C34;//同步Boss战斗信息
	static readonly SC_SyncEliteBattleReward: number = 0x0C35;
	static readonly CS_ExitEliteBattle: number = 0x0C36;
	static readonly CS_EliteAttack: number = 0x0C37;

	//扫荡
	static readonly CS_GetSweepInfo: number = 0x0C20;//获取扫荡信息
	static readonly SC_GetSweepInfo: number = 0x0C21;//获取扫荡信息
	static readonly CS_Sweep: number = 0x0C22;//扫荡
	static readonly SC_Sweep: number = 0x0C23;//返回扫荡

	//服务器开服时间
	static readonly CS_GetServerFirstStartTime: number = 0x333;//获取开服时间
	static readonly SC_GetServerFirstStartTime: number = 0x334;//返回开服时间
}