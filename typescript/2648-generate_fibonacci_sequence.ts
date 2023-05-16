function* fibGenerator(): Generator<number, any, number> {
  let index: number = 0;
  let next: number = 1;

  while (true) {
    yield index;
    let int: number = index;
    index = next;
    next = int + next;
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
