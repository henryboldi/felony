// import { should } from 'chai';
// import { expect } from 'chai';
// import { generateKey } from '../app/utils/pgp.js';

pgp = require('../app/utils/pgp.js')

describe('PGP tests', ()=>{
  it('should be correct', function(){
    console.log("pgp", pgp);
    var f = 3;
    expect(1 + 2).to.equal(3);

    let foo = gpg.generateKey({name:"f", email:"Foo@foobar.com"}, "3343")
    foo.then((key)=>{
      expect(foo);
    });
    // expect(foo);
  });

});
