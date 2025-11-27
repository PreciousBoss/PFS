function toggle_nav(){
  let sub_nav = document.getElementById("sub_nav");
  if(sub_nav.style.display === 'none'){
    sub_nav.style.display = "block";
  }else{
    sub_nav.style.display = "none";
  }
}