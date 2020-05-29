$('#userLogin').on('click', function () {
    const email = $('#email').val();
    const password = $('#password').val();
    if (email.trim().length == 0) {
      alert('用户名不能为空，请输入邮箱地址');
      return;
    };
    if (password.trim().length == 0) {
      alert('密码为空，请输入密码');
      return;
    };
    $.ajax({
      type: 'post',
      url: '/login',
      data: {
        email: email,
        password: password 
      },
      success: function (response) {
        console.log(response);
        location.href = 'index.html'
      },
      error: function () {
        alert('登录失败')
      }
    })
  }) 
