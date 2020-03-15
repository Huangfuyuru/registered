$(function(){
  var $userName = $('#userName'),
      $regUser = $('#reg-user'),
      $telCode = $('#tel'),
      $regTel = $('#reg-tel'),
      $pass = $('#pass'),
      $regPass = $('#reg-pass'),
      $vcode = $('#verification-code'),
      $regk = $('#reg-vcode'),
      $submitB = $('#submit-button'),
      $vcbutton = $('#verification-code-button');

  //实现发送验证码效果
  $vcbutton.click(function(){
    $vcbutton.attr('disabled','disabled');
    var time = 30;
    var a = setInterval(function(){
      if(time == 0){
        clearInterval(a);
        $vcbutton.removeAttr('disabled');
        $vcbutton.val('发送验证码');
      }else{
      $vcbutton.val(`${time}s`);
      time--;
      }
    },1000);
  });
  
  //表单级检验
  $submitB.click(function(){
    if(!testUsername() || !testTel() || !testPass() || !testVcode()){
      return;
    }
    //向服务器发送请求
    return;
  })
  //字段级检验
  $userName.focusout(function(){
    if(!testUsername()){
      $userName.addClass('input-d');
    }else{
      $userName.removeClass('input-d');
    }
  });
  $telCode.focusout(function(){
    if(!testTel()){
      $telCode.addClass('input-d');
    }else{
      $telCode.removeClass('input-d');
    }
  });
  $pass.focusout(function(){
    if(!testPass()){
      $pass.addClass('input-d');
    }else{
      $pass.removeClass('input-d');
    }
  });
  $vcode.focusout(function(){
    if(!testVcode()){
      $vcode.addClass('input-d');
    }else{
      $vcode.removeClass('input-d');
    }
  });
  
  //test userName
  function testUsername(){
    if($userName.val() === ''){
      $regUser.html('用户名不能为空!');
      return false;
    }
    if(!/^(?!(\d+)$)[\u4e00-\u9fff\w]+$/.test($userName.val())){
      $regUser.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
      return false;
    }
    $regUser.html('');
    return true;
  };

  //test tel
  function testTel(){
    if($telCode.val() === ''){
      $regTel.html('手机号不能为空!');
      return false;
    }
    if(!/0?(13|14|15|18)[0-9]{9}/.test($telCode.val())){
      $regTel.html('手格号码格式不正确');
      return false;
    }
    $regTel.html('');
    return true;
  };

  function testPass(){
    if($pass.val() === ''){
      $regPass.html('密码不能为空!');
      return false;
    }
    
    if(!/(?!^\d+$)(?!^[A-Za-z]+$)(?!^_+$)^\w{8,14}$/.test($pass.val())){
      console.log($pass.val());
      $regPass.html('密码设置不符合要求');
      return false;
    }
    $regPass.html('');
    return true;
  }
  
  function testVcode(){
    if($vcode.val() ===''){
      $regk.html('验证码不能为空');
      return false;
    }
    $regk.html('');
    return true;
  }
})
