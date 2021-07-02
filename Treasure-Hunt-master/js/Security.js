class Security {

    constructor(){

        this.acess1 = createInput('answer1');
        this.acess2 = createInput('answer2');
        this.acess3 = createInput('answer3');

        this.button1 = createButton('check');
        this.button2 = createButton('check');
        this.button3 = createButton('check');

    }

    display(){

        this.acess1.position(100,90);
        this.acess2.position(700,190);
        this.acess3.position(100,290);
        
        this.button1.position(100,120);
        this.button2.position(700,220);
        this.button3.position(100,320);

        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.acess1.value())){
              this.button1.hide();
              this.acess1.hide(); 
              score++;
            }
        });

        this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.acess2.value())){
              this.button2.hide();
              this.acess2.hide();
              score++;
            }
        });

        this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3,this.acess3.value())){
                this.button3.hide();
                this.acess3.hide();
                score++;
            }
        });

    }
}