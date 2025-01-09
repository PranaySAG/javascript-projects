const testimonial = [{
    name: "Emily Thompson",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Artistry Grafix offers seamless services that exceed expectations. I am beyond impressed with the level of creativity and professionalism. I highly recommend Artistry Grafix for anyone seeking top-notch design solutions.",
},
{
    name: "Samantha Reynold",
    photoUrl: "https://images.unsplash.com/photo-1541519481457-763224276691?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Artistry Grafix's services providing is truly seamless. Their attention to detail and creativity exceeded my expectations. I highly recommend their expertise for any project you have in mind. Thank you for the outstanding work.",
},
{
    name: "Sophia Richardson",
    photoUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Artistry Grafix provides seamless and top-notch services. I was impressed by the quality and attention to detail they put into their work. I would highly recommend Artistry Grafix for all your design needs.",
},];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonials()

function updateTestimonials() {
    const {name, photoUrl, text} = testimonial[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonial.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonials()
    }, 10000)
}