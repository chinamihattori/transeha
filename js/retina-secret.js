/*
 * https://on-ze.com/archives/3131
 */
$(function(){
	var retinaCheck = window.devicePixelRatio;
	if(retinaCheck >= 2) { // Retina繝�ぅ繧ｹ繝励Ξ繧､縺ｮ縺ｨ縺阪ｒ蛻�ｲ舌＆縺帙※縺�ｋ
		$('img.retina').each( function() {
			var retinaimg = $(this).attr('src').replace(/\.(?=(?:png|jpg|jpeg)$)/i, '@2x.');
			$(this).attr('srcset', retinaimg + " 2x");
		});
	}
});