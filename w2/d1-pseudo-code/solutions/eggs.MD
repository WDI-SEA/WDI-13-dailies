## Suggestions & Possible Solutions

### If there are eggs:

1. 13 Gallons

```
GallonsToBuy is 1
if Store Has "Eggs"
  Increase GallonsToBuy by 12
end

Purchase <GallonsToBuy> gallons of "Milk"
```


```
GallonsToBuy = 1
IF StoreHas("Eggs")
  GallonsToBuy += 12
END

Buy("Milk", GallonsToBuy)
```

2. Milk AND Eggs

```
GallonsToBuy is 1
EggsToBuy is 0

if Store Has "Eggs"
  Increase eggsToBuy by 12
end

Purchase <GallonsToBuy> gallons of "Milk"
Purchase <eggsToBuy> eggs
```



***
