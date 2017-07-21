class CrewMember {
  constructor(position, currentShip = "Looking for a Rig"){
    this.position = position
    this.currentShip = currentShip
  }

  engageWarpDrive(){
    if(this.currentShip === "Looking for a Rig"){
      return "had no effect"
    }
    else if(this.currentShip !== "Looking for a Rig" && this.position === "Pilot") {
      this.currentShip.warpDrive = "engaged!"
    }
  }

  setsInvisibility(){
    if(this.currentShip === "Looking for a Rig"){
      return "had no effect"
    }
    else if(this.currentShip !== "Looking for a Rig" && this.position === "Defender") {
      this.currentShip.cloaked = true
    }
  }

  chargePhasers(){
    if(this.currentShip === "Looking for a Rig"){
      return "had no effect"
    }
    else if(this.currentShip !== "Looking for a Rig" && this.position === "Gunner") {
      this.currentShip.phasersCharge = "charged!"
    }
  }
}

class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged", docked = true, phasersCharge = "uncharged") {

      this.name = name
      this.crew = crew
      this.phasers = phasers
      this.shields = shields
      this.cloaked = cloaked
      this.warpDrive = warpDrive

      if(this.crew.length > 0){

        this.docked = false
      }
      else{
        this.docked = docked
      }

      this.phasersCharge = phasersCharge

      this.crew.forEach(member => {
        member.currentShip = this
      })
  }
}
