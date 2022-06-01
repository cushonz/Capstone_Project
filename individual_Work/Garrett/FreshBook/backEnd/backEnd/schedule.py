from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required
from models import Schedule
from exts import db

schedule_ns = Namespace('schedule', description = "A namespace for schedule")

schedule_model = schedule_ns.model(
    "Schedule",
    {
        # "empId" : fields.Integer(),
        "id" : fields.Integer(),
        "startTime" : fields.String(),
        "endTime" : fields.String(),
        "day" : fields.String()
    }
)

@schedule_ns.route('/schedules')
class AvailabilitiesResource(Resource):
    @schedule_ns.marshal_list_with(schedule_model)
    def get(self):
        """Get all Schedules from DB"""

        availabilities = Schedule.query.all()

        return availabilities

    @schedule_ns.marshal_list_with(schedule_model)
    def delete(self):
        """Deletes all schedules"""
            
        db.session.query(Schedule).delete()
        db.session.commit()


    @schedule_ns.marshal_with(schedule_model)
    def post(self):
        """Create a new Schedule"""
            
        data = request.get_json()
        new_schedule = Schedule(
            startTime = data.get('startTime'),
            endTime = data.get('endTime'),
            day= data.get('day')
        )
        new_schedule.save()
            
        return new_schedule, 201

@schedule_ns.route('/schedules/<int:id>')
class AvailabilityResource(Resource):
    @schedule_ns.marshal_with(schedule_model)
    def get(self, id):
        """Get a schedule by id"""

        schedule = Schedule.query.get_or_404(id)
            
        return schedule

    @schedule_ns.marshal_with(schedule_model)
    def put(self, id):
        """Update a schedule by id"""
            
        schedule_to_update = Schedule.query.get_or_404(id)
        data = request.get_json()
        schedule_to_update.update(data.get('startTime'), data.get('endTime'), data.get('day'))
        
        return schedule_to_update

    @schedule_ns.marshal_with(schedule_model)
    def delete(self, id):
        """Deletes a schedule by id"""
            
        schedule_to_delete = Schedule.query.get_or_404(id)
        schedule_to_delete.delete()

        return schedule_to_delete 

