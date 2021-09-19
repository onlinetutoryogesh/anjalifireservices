function SubForm()
{
    var a=document.forms["Form"]["firstname"].value;
    var b=document.forms["Form"]["midname"].value;
    var c=document.forms["Form"]["lastname"].value;
    var d=document.forms["Form"]["tribe"].value;
    if (a==null || a=="",b==null || b=="",c==null || c=="",d==null || d=="")
    {
        alert("Please Fill All Required Field");
        return false;
    }
    else{

        $.ajax({
        type: 'post',
        url: 'add.php',
        data: $('form').serialize(),
        success: function () {
          alert('Patient added');
          document.getElementById("form").reset();
        }
      });

    }
}

  $(function () {

    $('form').on('submit', function (e) {
      e.preventDefault();

      SubForm();


    });
  });
  