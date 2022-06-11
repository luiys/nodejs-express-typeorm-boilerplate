
import { Routes } from '@/routes'

export function Get(route: string) {

    return function (target: { constructor: any }, key: any, descriptor: any) {

        new Promise(resolve => setTimeout(resolve, 0)).then(() => {

            Routes.push({
                method: 'get',
                route: route,
                controller: target.constructor,
                action: key
            })

        })

        return descriptor

    }

}

export function Post(route: string) {

    return function (target: { constructor: any }, key: any, descriptor: any) {

        new Promise(resolve => setTimeout(resolve, 0)).then(() => {

            Routes.push({
                method: 'post',
                route: route,
                controller: target.constructor,
                action: key
            })

        })

        return descriptor

    }

}

export function Delete(route: string) {

    return function (target: { constructor: any }, key: any, descriptor: any) {

        new Promise(resolve => setTimeout(resolve, 0)).then(() => {

            Routes.push({
                method: 'delete',
                route: route,
                controller: target.constructor,
                action: key
            })

        })

        return descriptor

    }

}
