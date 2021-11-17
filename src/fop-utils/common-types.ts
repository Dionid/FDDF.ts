import { BrandedPrimitive } from 'functional-oriented-programming-ts'
import * as uuid from 'uuid'
import { v4 } from 'uuid'
import { ValidationError } from '../errors'

export type UUID = BrandedPrimitive<string, { readonly UUID: unique symbol }>
export const UUID = {
  ofString: (value: string) => {
    return !uuid.validate(value) ? new ValidationError('not valid uuid') : (value as UUID)
  },
  new: () => {
    return UUID.ofString(v4()) as UUID
  }
}