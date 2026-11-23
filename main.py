def on_on_overlap(sprite, otherSprite):
    pass
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

projectile: Sprite = None
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(mySprite)

def on_update_interval():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
        projectile,
        randint(-50, 50),
        randint(-50, 50))
game.on_update_interval(500, on_update_interval)
