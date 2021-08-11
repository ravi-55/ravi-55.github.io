$(function() {  
    $( ".drag" ).draggable();  
  }); 

function showPreview(){
  let htmlCode =  $("#htmlCode").val();
  let cssCode = `<style> ${$("#cssCode").val()} </style>`;
  let jsCode = `<script> ${$("#jsCode").val()} </script>`;

  let frame = document.getElementById("preview-window").contentWindow.document;
  
  frame.open();
  frame.write(htmlCode+cssCode+jsCode);
  frame.close();
}

