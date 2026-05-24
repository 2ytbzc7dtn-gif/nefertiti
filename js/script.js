
            
                    // screen 2
                    document.addEventListener("DOMContentLoaded", function() {
                        const nextButton = document.querySelector(".next");
                    
                        // timelines
                        const tl2 = gsap.timeline();
                        const tl3 = gsap.timeline();
                    
                        tl2.from(".othe", {
                        opacity: 0,
                        delay: 14,
                        });
                    
                        tl2.to(".othe", {
                        opacity: 1,
                        onComplete: function() {
                            gsap.to(".othe", { scale: 1.01, duration: 8, yoyo: true, repeat: -1, ease: "power1.inOut", transformOrigin: "center center" });
                        }
                        });
                    
                        tl3.from(".bodycopy2", {
                        x: "900", 
                        duration: 1, 
                        delay: 7,
                        });
                        
                        tl3.to(".bodycopy2", {
                        x: 0, 
                        duration: 1 
                        });
                        tl3.from(".maintitle2", {
                        x: "900", 
                        duration: 1, 
                        delay: 7,
                        });
                        
                        tl3.to(".maintitle2", {
                        x: 0, 
                        duration: 1 
                        });
                    
                        // play animations
                        function playAnimations() {
                        tl2.restart();
                        tl3.restart();
                        }
                    
                        // click event
                        nextButton.addEventListener("click", playAnimations);
                    });
                    
            
            
                document.addEventListener("DOMContentLoaded", function() {
                    // Get the image element
                    var nfImage = document.querySelector('.othe img');
                
                    // click event
                    nfImage.addEventListener('click', function() {
                    // new ani continued
                    var tl = gsap.timeline();
                    tl.to('.othe img', { duration: 1, y: '-90px', opacity: 0 });
                    tl.to('section:nth-child(3)', { delay: 3, duration: 0, display: 'block' });
                    });
                });
            
            
            
                //screen 3 //
                function startNextMotionGraphic() {
                    window.parent.postMessage("complete", '*');
                }
                function startAnimations() {
                //define timelines
                    let tl4 = gsap.timeline({ onComplete: startNextMotionGraphic });
                    let tl5 = gsap.timeline({ onComplete: startNextMotionGraphic });
            
            
                    tl4.from(".arm", {
                        opacity: 0,
                        delay: 7,
                    }).to(".arm", {
                        opacity: 1,
                    });
            
                    tl4.from(".bel", {
                        opacity: 0,
                        delay: 0,
                    }).to(".bel", {
                        opacity: 1,
                    });
            
            
                    tl4.from(".eye", {
                        opacity: 0,
                        delay: 0,
                    }).to(".eye", {
                        opacity: 1,
                    });
            
            
                    tl5.from(".seed", {
                        opacity: 0,
                        delay: 7,
                        duration:.2,
                    }).to(".seed", {
                        opacity: 1,
            
                    });
            
                    
                    tl5.from(".missing", {
                        opacity: 0,
                        delay: 0,
                    }).to(".missing", {
                        opacity: 1,
                        duration:.2,
                    });
            
                    tl5.from(".bullet", {
                        opacity: 0,
                        delay: 0,
                    }).to(".bullet", {
                        opacity: 1,
                    });
            
                    tl4.from(".inst", {
                        opacity: 0,
                        delay: 0,
                    }).to(".eye", {
                        opacity: 1,
                        duration:.2,
                    });
                    tl4.from(".statue", {
                        opacity: 0,
                    }).to(".statue", {
                        opacity: 1,
                    });
                    tl5.from(".gif", {
                        opacity: 0,
                    }).to(".gif", {
                        opacity: 1,
                    });

                }
            // content load
            document.addEventListener('DOMContentLoaded', function() {
                // click event
                document.getElementById('othe').addEventListener('click', function() {
                    startAnimations();
                });
            });


        // doc load
        document.addEventListener('DOMContentLoaded', function() {
            // get content and text
            const armImg = document.getElementById('arm');
            const belImg = document.getElementById('bel');
            const eyeImg = document.getElementById('eye');

            const armText = document.querySelector('.arm-text');
            const belText = document.querySelector('.bel-text');
            const eyeText = document.querySelector('.eye-text');

            // hide all text elements
            function hideAllText() {
                armText.style.display = 'none';
                belText.style.display = 'none';
                eyeText.style.display = 'none';
            }

            // visibility
            function toggleTextVisibility(textElement) {
                // hide 
                hideAllText();
                textElement.style.display = textElement.style.display === 'block' ? 'none' : 'block';
            }

            // event listener for arm image
            armImg.addEventListener('click', function() {
                toggleTextVisibility(armText);
            });

            // event listener for bel image
            belImg.addEventListener('click', function() {
                toggleTextVisibility(belText);
            });

            // event listener for eye image
            eyeImg.addEventListener('click', function() {
                toggleTextVisibility(eyeText);
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            // define the shaking 
            const coverShakeTimeline = gsap.timeline({ repeat: -1 });
            coverShakeTimeline.to('.cover', { x: -5, duration: 0.05 })
                            .to('.cover', { x: 5, duration: 0.05 })
                            .to('.cover', { x: 0, duration: 0.05 });
                            

            // ref to cover
            const cover = document.querySelector('.cover');
            const blue = document.querySelector('.blue');

            // click event 
            cover.addEventListener('click', function() {
                // cover shake
                const coverClickTimeline = gsap.timeline();
                coverClickTimeline.to('.cover', { x: -window.innerWidth, duration: 4 });

                // tl for blue mum
                const blueAnimationTimeline = gsap.timeline({ repeat: 5, yoyo: true });
                blueAnimationTimeline.fromTo('.blue', { opacity: 0 }, { opacity: 1, duration: 1 })
                                    .fromTo('.blue', { opacity: 1 }, { opacity: 0, duration: 1 });
            });
        });