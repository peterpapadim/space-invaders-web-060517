class CrewMember {
  constructor(position, currentShip = "Looking for a Rig"){
    this.position = position
    this.currentShip = currentShip
  }

  engageWarpDrive(){
    if(this.currentShip === "Looking for a Rig"){
      return "had no effect"
    }
  }

  setsInvisibility(){
    if(this.currentShip === "Looking for a Rig"){
      return "had no effect"
    }
  }

  chargePhasers(){
      if(this.currentShip === "Looking for a Rig"){
        return "had no effect"
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
  }
}
