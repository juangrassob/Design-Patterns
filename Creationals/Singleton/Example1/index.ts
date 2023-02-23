type Entry = {
  id: number;
  data: string;
};

class SingletonDatabase {
  private static instance: SingletonDatabase;
  private database: Entry[] = [];

  private constructor() {}

  public static getInstance(): SingletonDatabase {
    if (!SingletonDatabase.instance) {
      SingletonDatabase.instance = new SingletonDatabase();
    }

    return SingletonDatabase.instance;
  }

  public saveData(data: string): Entry {
    const id = this.database.length;
    this.database.push({ id, data });

    return this.database[id];
  }

  public getData(): Entry[] {
    return this.database;
  }
}

function clientCode() {
  const s1 = SingletonDatabase.getInstance();
  const s2 = SingletonDatabase.getInstance();

  s1.saveData('First entry');
  const data = s2.getData();

  if (!data.length) {
    console.log('Singleton is not working :(');
  } else {
    console.log(
      'Singleton is working, we just have one instance of the database'
    );
    console.log(data);
  }
}

clientCode();
