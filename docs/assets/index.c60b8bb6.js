import{s as i,j as n,b as e}from"./vendor.ad6a0d43.js";import{r as a}from"./index.33b6d7b0.js";const s=i.div`
  padding-top: 120px;
`,c=i.div`
  display: flex;
  align-items: center;
  min-height: 50vw;
  background-image: linear-gradient(180deg, #34155b, #9024c2 80%);
  padding: 40px 20px;
  ${a("sm")(`
    flex-direction: column-reverse;
  `)}
`,o=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`,r=i.h1`
  font-size: 48px;
  border-bottom: ${d=>`2px solid ${d.border||"#000"}`};
  padding-bottom: 30px;
  margin-bottom: 30px;
`,t=i.p`
  font-size: 24px;
  padding: 20px 10px;
  line-height: 1.8;
`,l=i.img`
  max-width: 100%;
`,p=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 40px;
  color: #fff;
  background-image: linear-gradient(180deg, #571b18, #24091e);
  ${a("sm")(`
    padding: 60px 20px;
  `)}
`,m=i.div`
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2b54;
`;var h="/nft-demo/assets/man.98cb6558.png";const f=()=>n(c,{id:"club",children:[e(o,{children:e(l,{src:h})}),n(o,{children:[e(r,{children:"JUST FOR FUN"}),n(t,{children:['"Gya" means child in Taiwanese, so Hip-Hop Gya stands for Hip-Hop child.',e("br",{}),"This is not a real NFT project.",e("br",{}),"The project is deployed to the Rinkeby testnet, just for fun.",e("br",{}),"And yes you can mint it with test ETH!"]})]})]}),x=()=>n(p,{id:"team",children:[e(r,{border:"#fff",children:"THE TEAM"}),n(t,{children:["Well...",e("br",{}),"Basically there is no team behind, there is only me :)",e("br",{}),"Just to clearify again, this is just a project for me to practice some frontend stuff and also solidity.",e("br",{}),"I wrote some shitty code based on the OpenZeppelin ERC721 contract."]})]}),b=()=>n(m,{id:"roadmap",children:[e(r,{children:"Roadmap"}),e(t,{children:"What is a roadmap?"})]}),y=()=>n(s,{children:[e(f,{}),e(x,{}),e(b,{})]});export{y as default};
