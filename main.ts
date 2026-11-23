sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
	
})
let projectile: Sprite = null
let thief = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let police = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f 8 8 8 8 8 8 f e f . 
    e 4 f 8 8 8 8 5 8 f 4 e . 
    e e f 8 8 8 8 8 8 f e e . 
    . . . 8 8 8 8 8 8 . . . . 
    . . . 8 8 . . 8 8 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(thief)
thief.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . f 9 9 9 9 9 9 f . . . . . . 
        . . . f 6 6 6 6 f . . . . . . . 
        . . . . f 9 9 f . . . . . . . . 
        . . . f 5 5 5 5 f . . . . . . . 
        . . f 5 f f f f 5 f . . . . . . 
        . f 5 f . . . . f 5 f . . . . . 
        . f 5 f . . . . f 5 f . . . . . 
        . f 5 f . . . . f 5 f . . . . . 
        . f 5 f . . . . f 5 f . . . . . 
        . . f 5 f f f f 5 f . . . . . . 
        . . . f 5 5 5 5 f . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, projectile, randint(-50, 50), randint(-50, 50))
})
