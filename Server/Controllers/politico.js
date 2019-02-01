import db from "../db/db"


class PoliticoController {
    createParty(req, res){
    if(!req.body.name) {
      return res.status(400).send({
        success: 'false',
        message: 'name is required'
      });
    } else if(!req.body.hqAddress){
        return res.status(400).send({
            success: false,
            message: "Headquater address field is required"
        })
    } else if(!req.body.logoUrl){
        return res.status(400).send({
            success: false,
            message: "Logo URL field is required"
        })
    }
    
   const parties = {
     id: db.length + 1,
     name: req.body.name,
     hqAddress: req.body.hqAddress,
     logoUrl: req.body.logoUrl,
   }
   db.push(parties);
   return res.status(201).send({
     status: 201,
     data: [
         {
             id: parties.id,
             name: parties.name
         }
     ]
   })
  }
}

const politicoController = new PoliticoController()
export default politicoController;