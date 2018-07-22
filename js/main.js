/**
 * Created by Ablo on 20/07/2018.
 */
const houkamiProject = {
    init(){
        this.overImage();
        this.scrollBottom()
    },
    overImage(){
        let el = $('.cool-opacity-tableau'), parentEl = '.cool-flex';
        el.on('mouseenter', function () {
            $(this).closest(parentEl).addClass('cool-scale')
        });
        el.on('mouseout', function () {
            $(this).closest(parentEl).removeClass('cool-scale')
        })
    },
    scrollBottom(){
        let el = $('#cool-btn');
        const distance = ()=>{
            let targetPositionTop = $('.cool-section-tableau').position().top,
                headerFixedHeight = $('.cool-header').outerHeight();
            return obj = {
                scrollTopDis: targetPositionTop,
                headerHeight: headerFixedHeight
            }
        };
        distance();
        $(window).on('resize', function () {
            distance();
        });
        el.on('click', function () {
          $('html, body').animate({scrollTop: distance().scrollTopDis - distance().headerHeight}, 500);
        })
    }
};
houkamiProject.init();

let Ecrire = {
    indiceTexte: 0,
    indiceChar:0,
    latence: 0,
    paused:  false,
    indInt: 0,
    tmpLatence: 30, //Le temps de latence
    intDelais: 100, //Intervalle de temps
    el: document.querySelector("#ecrire"),
    textes:["les futurs grands artistes du pays", "art de l'afrique noir", "les meilleurs tableaux du moment"],
    cn: ()=>{
        let texte = Ecrire.textes[Ecrire.indiceTexte];
        if(!Ecrire.paused){
            Ecrire.el.textContent = Ecrire.el.textContent + texte.substr(Ecrire.indiceChar,1);
        }

        if(Ecrire.indiceChar>=texte.length){
            Ecrire.paused = true;
            if(++Ecrire.latence>Ecrire.tmpLatence){
                Ecrire.latence = 0;
                Ecrire.el.textContent = "";
                Ecrire.paused = false;
                Ecrire.indiceChar = 0;
                if(++Ecrire.indiceTexte>=Ecrire.textes.length){
                    Ecrire.indiceTexte = 0;
                }
            }
        }else{
            Ecrire.indiceChar++;
        }
    },
    init:()=>{
        Ecrire.indInt = setInterval(Ecrire.cn,Ecrire.intDelais);
    }
};

Ecrire.init();