const store = require("./../db/store");


module.exports = {

    get_Notes: function(req, res) {
        store.getNotes()
        .then((response)=>{
            res.json(response)
        })
        .catch((e)=>{
            res.status(500).json(e)
        })
      },
    post_Notes: (req, res) => {
        store.addNote(req.body)
        .then((response)=>{
            res.json(response)
        })
        .catch((e)=>{
            res.status(500).json(e)
        })
      },
      
    delete_Notes: function(req, res) {
        store
          .removeNote(req.params.id)
          .then(() => res.json({ ok: true }))
          .catch(err => res.status(500).json(err));
      },
    
}