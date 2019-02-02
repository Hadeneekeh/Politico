import db from "../db/db"


class PoliticoController {
    createParty(req, res){
    if(!req.body.name) {
      return res.status(400).send({
        status: '400',
        message: 'name is required'
      });
    } else if(!req.body.hqAddress){
        return res.status(400).send({
            status: 400,
            message: "Headquater address field is required"
        })
    } else if(!req.body.logoUrl){
        return res.status(400).send({
            status: 400,
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

    getAParty(req, res){
    const id = parseInt(req.params.id)
    db.map(parties => {
        if(parties.id === id){
            return res.status(200).send({
                status: 201,
     data: [
         {
             id: parties.id,
             name: parties.name,
             logoUrl: parties.logoUrl
         }
     ]
            })
        }
    })

    return res.status(404).send({
        status: 404,
        message: "Party not found"
    })
        }

    getAllParties(req, res){
    return res.status(200).send({
        status: 200,
        data: [
            {
                parties: db
            }
        ]
    })
        }
    createOffice(req, res){
    if(!req.body.type) {
      return res.status(400).send({
        status: '400',
        message: 'Office type field is required'
      })
    } else if(!req.body.name){
        return res.status(400).send({
            status: 400,
            message: "Name field is required"
        })
    }

    const offices = {
        id: db.length + 1,
        type: req.body.type, 
        name: req.body.name
      }
      db.push(offices);
      return res.status(201).send({
        status: 201,
        data: [
            {
                id: offices.id,
                type: offices.type,
                name: offices.name
            }
        ]
      })

        }

    getAnOffice(req, res){
    const id = parseInt(req.params.id)
    db.map(offices => {
        if(offices.id === id){
            return res.status(200).send({
                status: 201,
     data: [
         {
             id: offices.id,
             name: offices.name   
         }
     ]
            })
        }
    })

    return res.status(404).send({
        status: 404,
        message: "Office not found"
    })
    }

    getAllOffices(req, res){
        return res.status(200).send({
            status: 200,
            data: [
                {
                    offices: db
                }]
              })
    }
}

const politicoController = new PoliticoController()
export default politicoController;