const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()
const pageSize = 3

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,//take all fields inside req.body and put in json
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks', auth, async (req, res) => {

    let page = req.query.page ?? 1
    let sortBy = req.query.sortBy?.split(':')[0] ?? 'createdAt'
    let sortOrder = req.query.sortBy?.split(':')[1] === 'asc' ?? true

    let filter = {
        owner: req.user._id,
    }
    if(req.query.completed) filter["completed"] = req.query.completed === 'true';

    let options = {skip: (page-1) * pageSize, limit: pageSize, sort: {}}
    options["sort"][sortBy] = (sortOrder === true ? 1 : -1)

    try {
        let tasks = await Task.find(filter, null, options)
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({ _id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router