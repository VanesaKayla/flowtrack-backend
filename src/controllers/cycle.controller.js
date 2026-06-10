const Cycle = require('../models/cycle.model');

const getAllCycles = async (req, res) => {
  try {
    const cycles = await Cycle.findAll();
    res.json({ success: true, payload: cycles });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createCycle = async (req, res) => {
  try {
    const { start_date, duration, cycle_length, notes } = req.body;
    if (!start_date || !duration) {
      return res.status(400).json({ success: false, message: 'start_date and duration are required' });
    }
    const cycle = await Cycle.create({ start_date, duration, cycle_length, notes });
    res.status(201).json({ success: true, payload: cycle });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteCycle = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Cycle.delete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Cycle not found' });
    }
    res.json({ success: true, message: 'Cycle deleted', payload: deleted });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getPrediction = async (req, res) => {
  try {
    const latest = await Cycle.getLatest();
    if (!latest) {
      return res.status(404).json({ success: false, message: 'No cycle data found' });
    }
    const avgLength = await Cycle.getAverageCycleLength();
    const lastDate = new Date(latest.start_date);
    const nextDate = new Date(lastDate);
    nextDate.setDate(lastDate.getDate() + Math.round(avgLength));
    res.json({
      success: true,
      payload: {
        last_period: latest.start_date,
        avg_cycle_length: Math.round(avgLength),
        predicted_next: nextDate.toISOString().split('T')[0],
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getAllCycles, createCycle, deleteCycle, getPrediction };