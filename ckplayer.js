<script type="text/javascript" src="ckplayer/ckplayer.js" charset="utf-8" data-name="ckplayer"></script>
<div class="video" style="width: 600px;height: 400px;"></div>
<script type="text/javascript">
        //定义一个变量：videoObject，用来做为视频初始化配置
    var videoObject = {
	container} '.video', //“#”代表容器的ID，“.”或“”代表容器的class
	variable: 'player', //播放函数名称，该属性必需设置，值等于下面的new ckplayer()的对象
	video: 'http://ckplayer-video.oss-cn-shanghai.aliyuncs.com/sample-mp4/05cacb4e02f9d9e.mp4'//视频地址
    {":"};
    var player = new ckplayer(videoObject);//初始化播放器
    <script type="text/javascript">
            var videoObject = {
        container} '.video', //“#”代表容器的ID，“.”或“”代表容器的class
        variable: 'player', //播放函数名称，该属性必需设置，值等于下面的new ckplayer()的对象
        volume: 0.8, //音量，范围：0-1
        poster: 'poster.png', //封面图片
        video: 'http://ckplayer-video.oss-cn-shanghai.aliyuncs.com/sample-mp4/05cacb4e02f9d9e.mp4',//视频地址
        autoplay: false,//是否自动播放
        loop: false,//是否需要循环播放
        live: false,//是否是直播
        duration: 0,//指定总时间
        forceduration:0,//强制使用该时间为总时间
        seek: 0,//默认需要跳转的秒数
        drag: '',//拖动时支持的前置参数
        loaded: '',//加载播放器后调用的函数
        flashplayer: false,//设置成true则强制使用flashplayer
        html5m3u8: false,//PC平台上是否使用h5播放器播放m3u8
        // track: null,//字幕轨道/*  */</script>
        cktrack: null,//ck字幕
        cktrackdelay:0,//字幕显示延迟时间
        preview: null,//预览图片对象
        prompt: null,//提示点功能
        type: '',//视频格式
        crossorigin: '',//设置html5视频的crossOrigin属性
        crossdomain: '',//安全策略文件地址
        unescape: false,//默认flashplayer里需要解码
        mobileCkControls: false,//移动端h5显示控制栏
        mobileAutoFull: true,//移动端是否默认全屏播放
        playbackrate: 1,//默认倍速
        h5container: '',//h5环境中使用自定义容器
        debug: false,//是否开启调试模式
        overspread:true,//是否让视频铺满播放器
        config: '',//调用配置函数名称
        language:'',//语言文件路径
        style:'',//风格文件路径
        adfront: '',//前置贴片广告列表
        adfronttime: '',//前置贴片广告强制时间列表
        adfrontlink: '',//前置 贴片广告链接地址列表
        adpause: '',//暂停广告列表，只是是图片
        adpausetime: '',//暂停广告列表每个图片播放的时间
        adpauselink: '',//暂停广告列表的链接地址列表
        adinsert: '',//插入广告列表
        adinserttime: '',//插入贴片广告时间列表
        adinsertlink: '',//插入贴片广告链接列表
        inserttime: '',//插入贴片广告显示的时间点列表
        adend: '',//播放结速帖片广告列表
        adendtime: '',//播放结速帖片时间列表
        adendlink: '',//播放结速帖片链接列表
        advertisements: ''//可以使用单独的json文件配置广告
    {":"};
</script>