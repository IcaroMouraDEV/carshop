import { model, Model, models, Schema } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  private modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findOne({ _id: id });
  }

  public async update(id: string, obj: T | undefined) {
    await this.model.updateOne({ _id: id }, { $set: { ...obj } });
  }

  public async delete(id: string) {
    await this.model.deleteOne({ _id: id });
  }
}