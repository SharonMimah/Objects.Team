const user ={
    name: "Shannie",
    age: 19,

bio: "electrical Engineer,Graduate Member UIPE, Researcher and lover of Mathematics",
image:"/images/MV5BZWZkNjM0NTEtNjJlYy00Y2Y1LTk5MjgtNzhiMjAyZjkxODBjXkEyXkFqcGc@._V1_.jpg"

}

//use Javascript to Update the HTML with object values
document.getElementById("user-name").textContent = user.name;
document.getElementById("user-age").textContent= "Age: " + user.age;
document.getElementById("user-bio").textContent = user.bio;
document.getElementById("user-image").src = user.image;