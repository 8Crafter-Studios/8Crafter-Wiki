---
title: mccommand Language Test
page_title: mccommand Language Test
description: A test for the mccommand language syntax highlighting.
hidden: true
---

```mccmd
execute unless entity @s [hasitem=[{item=andexsa:hazmat_helmet,location=slot.armor.head,quantity=0},{item=andexsa:hazmat_helmet_2,location=slot.armor.head,quantity=0},{item=andexsa:hazmat_helmet_orange,location=slot.armor.head,quantity=0},{item=andexsa:hazmat_helmet_orange_2,location=slot.armor.head,quantity=0}]] unless entity @s [hasitem=[{item=andexsa:hazmat_suit_boots,location=slot.armor.feet,quantity=0},{item=andexsa:orange_hazmat_suit_boots,location=slot.armor.feet,quantity=0}]] unless entity @s [hasitem=[{item=andexsa:hazmat_suit_chestplate,location=slot.armor.chest,quantity=0},{item=andexsa:orange_hazmat_suit_chestplate,location=slot.armor.chest,quantity=0}]] unless entity @s [hasitem=[{item=andexsa:hazmat_suit_leggings,location=slot.armor.legs,quantity=0},{item=andexsa:orange_hazmat_suit_leggings,location=slot.armor.legs,quantity=0}]] run tag @s add protected_hazmat_2
execute unless entity @s [hasitem=[{item=andexsa:space_helmet,location=slot.armor.head,quantity=0},{item=andexsa:space_helmet_2,location=slot.armor.head,quantity=0},{item=andexsa:space_helmet_3,location=slot.armor.head,quantity=0},{item=andexsa:space_helmet_4,location=slot.armor.head,quantity=0}]] unless entity @s [hasitem=[{item=andexsa:space_boots,location=slot.armor.feet,quantity=0},{item=andexsa:space_chestplate,location=slot.armor.chest,quantity=0},{item=andexsa:space_leggings,location=slot.armor.legs,quantity=0}]] run /tag @s add protected_space_2
tag @s [tag=protected_hazmat,tag=!protected_hazmat_2] remove protected_hazmat
tag @s [tag=!protected_hazmat,tag=protected_hazmat_2] add protected_hazmat
tag @s [tag=protected_hazmat_2] remove protected_hazmat_2
tag @s [tag=protected_space,tag=!protected_space_2] remove protected_space
tag @s [tag=!protected_space,tag=protected_space_2] add protected_space
tag @s [tag=protected_space_2] remove protected_space_2

/execute unless entity @s [hasitem=[{item=andexsa:hazmat_helmet,location=slot.armor.head,quantity=0},{item=andexsa:hazmat_helmet_2,location=slot.armor.head,quantity=0},{item=andexsa:hazmat_helmet_orange,location=slot.armor.head,quantity=0},{item=andexsa:hazmat_helmet_orange_2,location=slot.armor.head,quantity=0}]] unless entity @s [hasitem=[{item=andexsa:hazmat_suit_boots,location=slot.armor.feet,quantity=0},{item=andexsa:orange_hazmat_suit_boots,location=slot.armor.feet,quantity=0}]] unless entity @s [hasitem=[{item=andexsa:hazmat_suit_chestplate,location=slot.armor.chest,quantity=0},{item=andexsa:orange_hazmat_suit_chestplate,location=slot.armor.chest,quantity=0}]] unless entity @s [hasitem=[{item=andexsa:hazmat_suit_leggings,location=slot.armor.legs,quantity=0},{item=andexsa:orange_hazmat_suit_leggings,location=slot.armor.legs,quantity=0}]] run tag @s add protected_hazmat_2
/execute unless entity @s [hasitem=[{item=andexsa:space_helmet,location=slot.armor.head,quantity=0},{item=andexsa:space_helmet_2,location=slot.armor.head,quantity=0},{item=andexsa:space_helmet_3,location=slot.armor.head,quantity=0},{item=andexsa:space_helmet_4,location=slot.armor.head,quantity=0}]] unless entity @s [hasitem=[{item=andexsa:space_boots,location=slot.armor.feet,quantity=0},{item=andexsa:space_chestplate,location=slot.armor.chest,quantity=0},{item=andexsa:space_leggings,location=slot.armor.legs,quantity=0}]] run /tag @s add protected_space_2
/tag @s [tag=protected_hazmat,tag=!protected_hazmat_2] remove protected_hazmat
/tag @s [tag=!protected_hazmat,tag=protected_hazmat_2] add protected_hazmat
/tag @s [tag=protected_hazmat_2] remove protected_hazmat_2
/tag @s [tag=protected_space,tag=!protected_space_2] remove protected_space
/tag @s [tag=!protected_space,tag=protected_space_2] add protected_space
/tag @s [tag=protected_space_2] remove protected_space_2
```
