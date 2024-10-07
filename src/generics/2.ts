type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type a = Pick<AllType, 'name' | 'color'>;
type b = Pick<AllType, 'position' | 'weight'>;

function compare <AllType> (top: a , bottom: b):object {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}